import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useSigner, useContract } from "wagmi";
import {CONTRACT_ADDRESS, CONTRACT_ABI} from "../constants/index"

export default function Home() {
  const { data: signer } = useSigner();
  const contract = useContract({
    addressOrName: CONTRACT_ADDRESS,
    contractInterface: CONTRACT_ABI,
    signerOrProvider: signer,
  });

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Verifiable Credentials</a>
        </h1>
        <ConnectButton />
        <div className={styles.grid}>
          <div className={styles.card}>
            <h3>DID's</h3>
          </div>
          <div className={styles.card}>
            <h3>Email</h3>
          </div>
          <div className={styles.card}>
            <h3>Verified Credentials</h3>
          </div>
        </div>
      </main>
    </div>
  );
}
