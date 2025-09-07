const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const { z } = require('zod');
const { PrismaClient } = require('@prisma/client');
const Razorpay = require('razorpay');
const Stripe = require('stripe');
const cron = require('node-cron');
const { RateLimiterMemory } = require('rate-limiter-flexible');

const app = express();
const prisma = new PrismaClient();
app.use(cors());
app.use(helmet());
app.use(express.json());

// Rate limiting
const rateLimiter = new RateLimiterMemory({ points: 10, duration: 1 });
app.use((req, res, next) => {
  rateLimiter.consume(req.ip).then(() => next()).catch(() => res.status(429).send('Too Many Requests'));
});

// Payment setup
const razorpay = new Razorpay({ key_id: process.env.RAZORPAY_KEY, key_secret: process.env.RAZORPAY_SECRET });
const stripe = Stripe(process.env.STRIPE_SECRET);

// Routes
app.get('/', (req,res) => res.send('Backend Running Securely'));

// Example validation
app.post('/api/appointment', async (req,res) => {
  const schema = z.object({ userId: z.number(), doctorId: z.number(), date: z.string() });
  const parsed = schema.safeParse(req.body);
  if(!parsed.success) return res.status(400).json({ error: parsed.error.errors });
  const appointment = await prisma.appointment.create({ data: { ...parsed.data, date: new Date(parsed.data.date) } });
  res.json(appointment);
});

// Reminder scheduler
cron.schedule('0 9 * * *', async () => {
  console.log("Send daily reminders for appointments...");
});

const port = process.env.PORT || 4000;
app.listen(port, () => console.log('Backend listening on ' + port));