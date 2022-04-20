import { createContext, useState, useEffect } from "react";

const AuthContext = createContext({
  user: null,
  login: () => {},
  logout: () => {},
  authReady: false,
});

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // test the connection with backend
  }, []);

  const login = () => {
    setUser({
      id: "1",
      name: "William Monroy",
      email: "example@gmail.com",
      avatar: "https://avatars.githubusercontent.com/u/58092741?v=4",
      admin: true,
    });
    // console.log(user);
  };

  const logout = () => {
    setUser(null);
  };

  const context = { user, login, logout };

  return (
    <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
  );
};

export default AuthContext;
