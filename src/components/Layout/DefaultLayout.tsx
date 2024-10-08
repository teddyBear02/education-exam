import React, { useEffect } from "react";
import classNames from "classnames/bind";
import styles from "./Layout.module.scss";
import { LayoutProps } from "@/models";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import PrivateLayout from "./PrivateLayout";
import { storageGet } from "@/helper/appStorage";
import { StorageKey } from "@/constants";
import { RoleDataType } from "@/models/store/user.type";

const cx = classNames.bind(styles);

const DefaultLayout = ({ children }: LayoutProps) => {
  const { push, query, pathname } = useRouter();

  // const { user } = useSelector(selectAuth);

  useEffect(() => {
    const userStr = storageGet(StorageKey.USER);
    if (userStr && userStr.toString() !== "undefined") {
      const userData = JSON.parse(userStr) as RoleDataType;
      if (!userData) return;
      // dispatch(controlAuthUser(userData));
      else {
        push(query.id ? `/auth/login` : "/auth/login");
      }
    }
  }, []);
  return (
    <PrivateLayout>
      <div className={cx("layout-wrapper")}>{children}</div>
    </PrivateLayout>
  );
};

export default DefaultLayout;
