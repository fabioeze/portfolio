import Image from "next/image";
import styles from "./Container.module.css";
import Link from "next/link";
import { Children } from "react";

export default function Container({children}) {
  return (
    <div className={styles.container}>
        {children}
    </div>
  );
}
