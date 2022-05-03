import { Button } from "@nextui-org/react";
import Link from "next/link";
import React from "react";
import Content from "../../../components/Content";
import Navbar from "../../../components/Navbar";
import Sidebar from "../../../components/Sidebar";
import styles from "../../../styles/MyApplications.module.css";

const MyApplications = () => {
  return (
    <div className={styles.MyApplications}>
      <Navbar />
      <Sidebar current={7} />
      <Content> 
        My Applications
        <Link href="/dashboard/my-applications/application/1">
          <Button>Aplicacion x</Button>
        </Link>
      </Content>
    </div>
  );
};

export default MyApplications;
