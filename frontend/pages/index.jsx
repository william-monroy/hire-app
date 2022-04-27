import { useContext, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Router from "next/router";
import AuthContext from "../context/authContext";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Content from "../components/Content";
import { Text } from "@nextui-org/react";

const HomePage = () => {
  const { user, login, logout } = useContext(AuthContext);

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {user ? (
          <>
            <Navbar />
            <Sidebar />
            <Content>
              
            </Content>
          </>
        ) : null}
      </main>

      <footer className={styles.footer}>
        <p className={styles.footer__text}>Copyright &copy; | x Team 2022</p>
      </footer>
    </div>
  );
};

export default HomePage;
