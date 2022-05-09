import type { NextPage } from "next";
// import styles from "../../styles/Layout.module.css";
import Link from "next/link";
import Navbar from "./Navbar";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar />
      <div>{children}</div>
    </div>
  );
};

export default Layout;
