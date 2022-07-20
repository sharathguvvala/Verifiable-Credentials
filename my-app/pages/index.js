import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useSigner, useContract, useAccount } from "wagmi";
import { CONTRACT_ADDRESS, CONTRACT_ABI } from "../constants/index";
import { useEffect, useState } from "react";
import { ethers } from "ethers";

export default function Home() {
  const { address } = useAccount();
  const { data: signer } = useSigner();
  const contract = useContract({
    addressOrName: CONTRACT_ADDRESS,
    contractInterface: CONTRACT_ABI,
    signerOrProvider: signer,
  });

  const [isOwner, setIsOwner] = useState(false)
  const [isRegistered, setIsRegistered] = useState(false)
  const [isVerified, setIsVerified] = useState(false)

  const getRegistration = async () => {
    try {
      const status = await contract.registered(address)
      console.log(status)
      if(status === true) {
        setIsRegistered(true)
      }
    } catch (error) {
      console.log(error)
    }
  }

  const getVerification = async () => {
    try {
      const status = await contract.verified(address)
      console.log(status)
      if(status === true) {
        setIsVerified(true)
      }
    } catch (error) {
      console.log(error)
    }
  }

  const getOwner = async() => {
    try {
      console.log(contract)
      const owner = await contract.owner();
      console.log(owner)
      if(owner.toLowerCase() === address.toLowerCase()) {
        setIsOwner(true)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if(ethers.utils.isAddress(address)) {
      getOwner()
      getRegistration()
      getVerification()
    }
  }, [])

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
