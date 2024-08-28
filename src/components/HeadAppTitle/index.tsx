import React from "react";
import { useTranslation } from "next-i18next";
import Head from "next/head";

type HeadAppTitlePropsType = {
  title: string;
};

const HeadAppTitle: React.FC<HeadAppTitlePropsType> = ({ title }) => {
  const titlePage = `${title ? title + " |" : ""}  ${
    process.env.NEXT_PUBLIC_APP_NAME
  }`;
  return (
    <Head>
      <title>{titlePage}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
  );
};

export default HeadAppTitle;
