import { Button, Spacer } from "@nextui-org/react";
import React, { useState, useContext, useEffect } from "react";
import AuthContext from "../context/authContext";
import styles from "./Navbar.module.css";
import { IoNotificationsOutline } from "react-icons/io5";
import { Switch, useTheme } from "@nextui-org/react";
import useDarkMode from "use-dark-mode";
import { SunIcon } from "../components/SunIcon";
import { MoonIcon } from "../components/MoonIcon";

const Navbar = () => {
  const darkMode = useDarkMode(false);
  const { type, isDark } = useTheme();
  const { user, login, logout } = useContext(AuthContext);

  return (
    <div className={styles.Navbar}>
      <div className={styles.Navbar__icon}>
        <IoNotificationsOutline />
      </div>
      <Switch
        checked={darkMode.value}
        size="xl"
        iconOn={<SunIcon filled />}
        iconOff={<MoonIcon filled />}
        onChange={() => darkMode.toggle()}
      />
      <Spacer x={0.5} />
      {user ? (
        <>
          <Button
            onClick={logout}
            color="primary"
            className={styles.Navbar__btn}
          >
            Cerrar Sesión
          </Button>
          <Button
            onClick={logout}
            color="primary"
            className={styles.Navbar__btnSm}
            auto
          >
            Cerrar Sesión
          </Button>
        </>
      ) : null}
    </div>
  );
};

export default Navbar;
