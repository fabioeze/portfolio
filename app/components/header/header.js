import Image from "next/image";
import styles from "./header.module.css";
import Link from "next/link";

export default function Header() {
  return (
    <header className={styles.header}>
      
      <div className={styles.logoMain}>
        <h1>Fábio <span>Deves</span></h1>
      </div>

      <div className={styles.menuMain}>
        <nav>
          <ul>
            <Link href='/'><li>Home</li></Link>
            <Link href='/'><li>Sobre</li></Link>
            <Link href='/'><li>Conhecimento</li></Link>
            <Link href='/'><li>Projetos</li></Link>
            <Link href='/'><li>Contato</li></Link>
          </ul>
        </nav>
      </div>

      <div className={styles.contato}>
        <div>
           <Link href='/contato'><span>Vamos Conversar!</span></Link>
        </div>
      </div>
    </header>
  );
}
