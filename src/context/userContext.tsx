import React, { createContext, useContext } from "react";
import { useQueries } from "@/hooks/useQueries";
import Cookies from "js-cookie";

export const UserContext = createContext({});

export function UserContextProvider({
  children,
  ...props
}: {
  children: React.ReactNode;
  props: any;
}) {
  const { data: userData }: any = useQueries({
    prefixUrl: `https://service.pace-unv.cloud/api/user/me`,
    headers: {
      Authorization: `Bearer ${Cookies.get("user_token")}`,
    },
  });

  return (
    <UserContext.Provider value={userData?.data || null} {...props}>
      {children}
    </UserContext.Provider>
  );
}
