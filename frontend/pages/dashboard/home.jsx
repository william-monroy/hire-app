import React from "react";
import Content from "../../components/Content";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import styles from "../../styles/Home.module.css";

const Home = () => {
  return (
    <div className={styles.Home}>
      <Navbar />
      <Sidebar />
      <Content></Content>
    </div>
  );
};

export default Home;
