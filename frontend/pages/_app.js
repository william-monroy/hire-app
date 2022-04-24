import { useContext } from "react";
import Navbar from "../components/Navbar";
import { createTheme, NextUIProvider } from "@nextui-org/react";
import "../styles/globals.css";
import AuthContext, { AuthContextProvider } from "../context/authContext";
import useDarkMode from 'use-dark-mode';

const densoLightTheme = createTheme({
  type: "light",
  theme: {
    colors: {
      // brand colors
      primaryLight: "#DC0032",
      primary: "#DC0032",
      primaryDark: "#DC0032",

      gradient:
        "linear-gradient(112deg, $blue100 -25%, $pink500 -10%, $purple500 80%)",
      link: "#5E1DAD",

      // you can also create your own color
      myColor: "#ff4ecd",

      // ...  more colors
    },
    space: {},
    fonts: {},
  },
});
const densoDarkTheme = createTheme({
  type: "dark",
  theme: {
    colors: {
      // brand colors
      primaryLight: "#DC0032",
      primary: "#DC0032",
      primaryDark: "#DC0032",

      gradient:
        "linear-gradient(112deg, $blue100 -25%, $pink500 -10%, $purple500 80%)",
      link: "#5E1DAD",

      // you can also create your own color
      myColor: "#ff4ecd",

      // ...  more colors
    },
    space: {},
    fonts: {},
  },
});


function MyApp({ Component, pageProps }) {
  const darkMode = useDarkMode(false);
  const { user, login, logout } = useContext(AuthContext);
  // console.log(val);

  return (
    <NextUIProvider theme={darkMode.value ? densoDarkTheme : densoLightTheme}>
      <AuthContextProvider>
        <Component {...pageProps} />
      </AuthContextProvider>
    </NextUIProvider>
  );
}

export default MyApp;
