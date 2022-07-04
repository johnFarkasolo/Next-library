import type { NextPage } from 'next'
import { useTranslation } from 'next-i18next';
import {serverSideTranslations} from "next-i18next/serverSideTranslations";

const Home: NextPage = () => {
  const { t } = useTranslation('common');
  return <h1 className="text-3xl font-bold underline">{t('homepage_title')}</h1>
}

export const getServerSideProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common']))
  }
});
export default Home
