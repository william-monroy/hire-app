import { Button } from "@nextui-org/react";
import React, { useState, useContext, useEffect } from "react";
import AuthContext from "../context/authContext";
import styles from "./Navbar.module.css";
import { IoNotificationsOutline } from "react-icons/io5";

const Navbar = () => {
  const { user, login, logout } = useContext(AuthContext);

  return (
    <div className={styles.Navbar}>
      <div className={styles.Navbar__icon}>
        <IoNotificationsOutline />
      </div>

      {user ? (
        <>
          <Button
            onClick={logout}
            color="primary"
            className={styles.Navbar__btn}
          >
            Logout
          </Button>
          <Button
            onClick={logout}
            color="primary"
            className={styles.Navbar__btnSm}
            auto
          >
            Logout
          </Button>
        </>
      ) : null}
    </div>
  );
};

export default Navbar;
