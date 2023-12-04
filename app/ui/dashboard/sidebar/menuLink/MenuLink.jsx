"use client";
import { usePathname } from "next/navigation";
import React from "react";
import Link from "next/link";
import styles from "./menuLink.module.css";

const MenuLink = ({ item }) => {
  // usePathname is a Client Component hook
  const pathName = usePathname();

  return (
    <Link
      href={item.path}
      className={`${styles.container} ${
        pathName === item.path && styles.active
      }`}
    >
      {item.icon}
      {item.title}
    </Link>
  );
};

export default MenuLink;
