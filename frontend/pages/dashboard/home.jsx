import React, { useContext } from "react";
import Content from "../../components/Content";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import AuthContext from "../../context/authContext";
import styles from "../../styles/Home.module.css";
import HomeAdmin from "../../Views/HomeAdmin";
import HomeUser from "../../Views/HomeUser";

const Home = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className={styles.Home}>
      <Navbar />
      <Sidebar current={0} />
      <Content>
        {user.admin ? <HomeAdmin user={user} /> : <HomeUser user={user} />}
      </Content>
    </div>
  );
};

export default Home;
