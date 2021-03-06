import {
  Button,
  Divider,
  Popover,
  Spacer,
  StyledSpacer,
  Text,
} from "@nextui-org/react";
import React, { useState, useContext, useEffect } from "react";
import AuthContext from "../context/authContext";
import styles from "./Navbar.module.css";
import { IoNotifications, IoNotificationsOutline } from "react-icons/io5";
import { Switch, useTheme } from "@nextui-org/react";
import useDarkMode from "use-dark-mode";
import { SunIcon } from "../components/SunIcon";
import { MoonIcon } from "../components/MoonIcon";
import { useRouter } from "next/router";
import Link from "next/link";

const Navbar = () => {
  const darkMode = useDarkMode(false);
  const { type, isDark } = useTheme();
  const { user, login, logout } = useContext(AuthContext);

  const [notifications, setNotifications] = useState(
    user.admin
      ? localStorage.getItem("notifications-admin")
        ? JSON.parse(localStorage.getItem("notifications-admin"))
        : []
      : localStorage.getItem("notifications-user")
      ? JSON.parse(localStorage.getItem("notifications-user"))
      : []
  );

  const router = useRouter();

  useEffect(() => {
    if (user == null) {
      router.push("/login");
    }
  }, [user]);

  return (
    <div className={styles.Navbar}>
      <Popover placement="bottom">
        <Popover.Trigger>
          <Button auto color="primary" css={{ marginRight: "10px" }}>
            <div className={styles.Navbar__icon}>
              <IoNotifications
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "14px",
                }}
              />
            </div>
          </Button>
        </Popover.Trigger>
        <Popover.Content
          css={{
            width: "200px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "10px",
          }}
        >
          <Text h1 size={18}>
            Notificaciones
          </Text>
          <Spacer y={0.2} />
          <Divider />
          <Spacer y={0.4} />
          {notifications.length > 0 ? (
            <>
              {notifications.map((notification, index) => (
                <>
                  <Link href="/dashboard/applicants">
                    <Text size={14}>{notification.text}</Text>
                  </Link>
                  <Spacer y={0.2} />
                </>
              ))}
            </>
          ) : (
            <>
              <Text size={14}>No tienes notificaciones</Text>
              <Spacer y={0.2} />
            </>
          )}
        </Popover.Content>
      </Popover>
      <Switch
        checked={darkMode.value}
        size="xl"
        iconOn={<SunIcon filled />}
        iconOff={<MoonIcon filled />}
        onChange={() => darkMode.toggle()}
      />
      <Spacer x={0.5} />
      {user != null ? (
        <>
          <Button
            onClick={logout}
            color="primary"
            className={styles.Navbar__btn}
          >
            Cerrar Sesi??n
          </Button>
          <Button
            onClick={logout}
            color="primary"
            className={styles.Navbar__btnSm}
            auto
          >
            Cerrar Sesi??n
          </Button>
        </>
      ) : null}
    </div>
  );
};

export default Navbar;
