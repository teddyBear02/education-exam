import React from "react";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import HeadAppTitle from "@/components/HeadAppTitle";
import { useTranslation } from "next-i18next";
import dynamic from "next/dynamic";

const LoginForm = dynamic(() => import("@/components/Auth/LoginForm"), {
  ssr: false,
});

const Login = () => {
  const { t } = useTranslation("auth");

  return (
    <>
      <HeadAppTitle title={t("auth.login")} />
      <LoginForm />
    </>
  );
};

export default Login;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? "en-US", ["auth"])),
    },
  };
};
