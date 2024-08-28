import { useRouter } from "next/router";
import { useState } from "react";
import { ContextProvider } from ".";
import { RoleDataType } from "@/models/store/user.type";

export const AppContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const router = useRouter();

  const [loading, setLoading] = useState<boolean>(false);
  const [accountRole, setAccountRole] = useState<RoleDataType>(
    RoleDataType.USER
  );

  const valueContext = {
    loading,
    setLoading,
    accountRole,
    setAccountRole,
  };

  return <ContextProvider value={valueContext}>{children}</ContextProvider>;
};
