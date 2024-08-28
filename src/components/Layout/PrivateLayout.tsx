import React, { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/router";

import { StorageKey } from "@/constants";
import { LayoutProps } from "@/models";
import { cookieGet, storageGet } from "@/helper/appStorage";
import { useAppDispatch } from "@/store";
import { unwrapResult } from "@reduxjs/toolkit";
import { clearAuthData, saveAuthData } from "@/helper/authHelper";
import { useAppContext } from "@/context";

const PrivateLayout = ({ children }: LayoutProps) => {
  const dispatch = useAppDispatch();
  const { setLoading } = useAppContext();
  const { query, push } = useRouter();

  const [logged, setLogged] = useState<boolean>(false);

  useEffect(() => {
    //Check token
    handleCallFirstData().finally(() => setLoading(false));
  }, []);

  const handleCallFirstData = useCallback(async () => {
    const accessToken = cookieGet(StorageKey.TOKEN);
    const refreshToken = cookieGet(StorageKey.REFRESH_TOKEN);
    const newestSignIn = storageGet(StorageKey.NEWEST_SIGN_IN);

    if (!accessToken) {
      clearAuthData();
      setLogged(false);
      push(query.id ? `/auth/sign-out?project=${query.id}` : "/auth/sign-out");
      return;
    }

    if (!JSON.parse(newestSignIn)) {
    }
  }, [dispatch]);

  if (!logged) return <div />;
  return <>{children}</>;
};

export default PrivateLayout;
