import Image from "next/image";
import styles from "./Card.module.css";
import Link from "next/link";

export default function Card({ children, width }) {
    return (
        <div className={styles.card} style={{ width: width }}>
            <div className={styles.insideCard}>
                {children}
            </div>
        </div>
    );
}