import React, { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { StorageKey } from "@/constants";
import { LayoutProps } from "@/models";
import { cookieGet, storageGet } from "@/helper/appStorage";
import { useAppDispatch } from "@/store";
import { clearAuthData, saveAuthData } from "@/helper/authHelper";
import { useAppContext } from "@/context";

const PrivateLayout = ({ children }: LayoutProps) => {
  const dispatch = useAppDispatch();
  const { setLoading } = useAppContext();
  const router = useRouter();
  const [logged, setLogged] = useState<boolean>(false);

  useEffect(() => {
    //Check token
    handleCallFirstData().finally(() => setLoading(false));
  }, []);

  const handleCallFirstData = useCallback(async () => {
    const accessToken = await cookieGet(StorageKey.TOKEN);
    const newestSignIn = await storageGet(StorageKey.NEWEST_SIGN_IN);

    if (!accessToken || accessToken === "undefined") {
      clearAuthData();
      setLogged(false);
      router.push("auth/login");
    }
  }, [router]);

  if (!logged) return <div />;
  return <>{children}</>;
};

export default PrivateLayout;
