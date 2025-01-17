import Image from "next/image";
import styles from "./page.module.css";
import Header from "./components/header/header";
import Container from "./components/Container/Container";
import Card from "./components/cards/Card";

export default function Home() {
  return (
    <div className={styles.content}>
      <Container>
        <Header/>
        <main>
          <Card width='49%'>
            <span>teste</span>
          </Card>
          <Card width='49%'>
            <span>teste</span>
          </Card>
          <Card width='49%'>
            <span>teste</span>
          </Card>
        </main>
      </Container>
    </div>
  );
}
