import { useRouter } from "next/router";
import { createContext, useState, useEffect } from "react";
import axios from 'axios'

const AuthContext = createContext({
  user: null,
  login: () => {},
  logout: () => {},
  authReady: false,
});

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (user) => {
    setUser(user);
  };

  const router = useRouter();

  const logout = async (e) => {
      e.preventDefault();
      const userAPI = await axios.post("/api/auth/logout");
      if (userAPI.status === 200) {
        router.push("/login");
      } else {
        console.log("error");
        setError("No se puede hacer logout");
      }
  };

  const context = { user, login, logout };

  return (
    <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
  );
};

export default AuthContext;
