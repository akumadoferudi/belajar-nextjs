/* eslint-disable */

// import { Component } from "react";

export function withAuth(Component: any) {
  return function withAuth(props: any) {
    const isLogin = true;

    if (!isLogin) return <div>Anda harus login!</div>;

    return <Component {...props} />;
  };
}
