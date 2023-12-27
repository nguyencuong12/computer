"use client";
import React from "react";
import { CookiesProvider } from "react-cookie";

const Provider = ({ children }: any) => {
  return <CookiesProvider>{children}</CookiesProvider>;
};

export default Provider;
