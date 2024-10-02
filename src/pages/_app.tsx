import React from "react";
import type { AppProps } from "next/app";
import { AppContextProvider } from "@/context/AppContextProvider";
import StoreProviders from "@/store/StoreProvider";
import { useRouter } from "next/router";
import { appWithTranslation } from "next-i18next";
import { useEffect, useState } from "react";
import { storageGet, storageSet } from "@/helper/appStorage";
import { StorageKey } from "@/constants/storage-key";
import { useAppContext } from "@/context";
import { base64UrlDecode } from "@/helper/authHelper";
import "@/styles/global.scss";

const App = ({ Component, pageProps }: AppProps) => {
  const { locale } = useRouter();

  const { setLoading, setAccountRole } = useAppContext();

  const token = storageGet(StorageKey.TOKEN);

  const [loadLib, setLoadLib] = useState<boolean>(false);

  useEffect(() => {
    setLoadLib(false);
    setLoading(true);
    require("antd/lib");
    require("@ant-design/icons");
    storageSet(StorageKey.LOCALE, locale as string);
    setLoadLib(true);
    setLoading(false);
  }, []);

  useEffect(() => {
    if (!token) return;
    const decode = base64UrlDecode(token);
    setAccountRole(decode.role);
  }, [token, loadLib]);

  return (
    <>
      <StoreProviders>
        <AppContextProvider>
          <Component {...pageProps} />
        </AppContextProvider>
      </StoreProviders>
    </>
  );
};

export default appWithTranslation(App);
