import { createContext } from "react";

const UIContext = createContext({
  
});

export const UIContextProvider = ({ children }) => {
  
  return <UIContext.Provider value={context}>{children}</UIContext.Provider>;
};

export default UIContext;
