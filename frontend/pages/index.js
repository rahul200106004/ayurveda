import { useTranslation } from 'next-i18next';
export default function Home() {
  const { t } = useTranslation('common');
  return (
    <div className="p-10 text-center">
      <h1 className="text-3xl font-bold text-green-700">{t('welcome')}</h1>
      <a href="/appointments" className="bg-green-600 text-white px-4 py-2 mt-4 inline-block rounded">
        {t('book_consultation')}
      </a>
    </div>
  );
}