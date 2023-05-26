import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["index"])),
    },
  };
}

export default function Main() {
  const { t } = useTranslation("index");

  return (
    <>
      <Head>
        <title>{t("main-page.title")}</title>
      </Head>
      <main>
        <div>{t("main-page.subtitle")}</div>
      </main>
    </>
  );
}
