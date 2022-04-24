import { useTheme } from "@nextui-org/react";
import { useContext } from "react";

const UIContext = createContext({
  theme: "ligth",
});

export const UIContextProvider = ({ children }) => {
  const darkMode = useDarkMode(false);
  const { type, isDark } = useTheme();

  const [theme, setTheme] = useState("light");

  const context = { theme, setTheme };


  return <UIContext.Provider value={context}>{children}</UIContext.Provider>;
};

export default UIContext;
