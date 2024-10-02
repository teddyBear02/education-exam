import React from "react";
import { GetStaticProps } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import DefaultLayout from "@/components/Layout/DefaultLayout";
import HeadAppTitle from "@/components/HeadAppTitle";
import Home from "@/components/Home";
import { NextPageWithLayout } from "@/models";

const HomePage: NextPageWithLayout = () => {
  const { t } = useTranslation();

  return (
    <>
      <HeadAppTitle title={t("home")} />
      <Home />
    </>
  );
};

HomePage.Layout = DefaultLayout;

export default HomePage;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? "en-US", ["common"])),
    },
  };
};
