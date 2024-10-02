import React from "react";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import HeadAppTitle from "@/components/HeadAppTitle";
import { useTranslation } from "next-i18next";
import dynamic from "next/dynamic";

const RegisterForm = dynamic(() => import("@/components/Auth/RegisterForm"), {
  ssr: false,
});

const Register = () => {
  const { t } = useTranslation();
  return (
    <>
      <HeadAppTitle title={t("auth.register", { ns: "auth" })} />
      <RegisterForm />
    </>
  );
};

export default Register;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? "en-US", [])),
    },
  };
};
