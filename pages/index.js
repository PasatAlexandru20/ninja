import Head from "next/head";
import Link from "next/link";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas"  />
      </Head>
      <div>
        <h1 className={styles.title}>Home page</h1>
        <p className={styles.text}>
          Lorem Ipsum dolor sit amet consectetur adipiscing elit. Provendet eos
          expedita cupidit.
        </p>
        <p className={styles.text}>
          Lorem Ipsum dolor sit amet consectetur adipiscing elit. Provendet eos
          expedita cupidit.
        </p>

        <Link href="/ninjas">
          <a>See Ninja Listing </a>
        </Link>

        <Link href="/ninja">
          <a className={styles.btn}>See Ninja Listing</a>
        </Link>
      </div>
    </>
  );
}
