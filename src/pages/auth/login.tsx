import React from "react";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import HeadAppTitle from "@/components/HeadAppTitle";
import { useTranslation } from "next-i18next";

const Login = () => {
  const { t } = useTranslation();
  return (
    <>
      <HeadAppTitle title={t("auth.login", { ns: "auth" })} />
    </>
  );
};

export default Login;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? "en-US", [])),
    },
  };
};
