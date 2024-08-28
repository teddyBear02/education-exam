import React from "react";
import classNames from "classnames/bind";
import { useTranslation } from "next-i18next";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Button, Result } from "antd/lib";

import styles from "@/styles/404.module.scss";

const cx = classNames.bind(styles);

const NotFoundPage = () => {
  const { t } = useTranslation();

  return (
    <div className={cx("page-404")}>
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={
          <Button type="primary" onClick={() => (window.location.href = "/")}>
            {t("back_home")}
          </Button>
        }
      />
    </div>
  );
};

export default NotFoundPage;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? "en-US", [])),
    },
  };
};
