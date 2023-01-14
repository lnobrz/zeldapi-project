import { createContext, useState } from "react";

export const GlobalContext = createContext();

export const GlobalStorage = ({ children }) => {
  const [lightTheme, setLightTheme] = useState(false);

  const fetchThemeInfo = () => {
    if (typeof window !== undefined) {
      if (localStorage.getItem("lightTheme")) {
        setLightTheme(JSON.parse(localStorage.getItem("lightTheme")));
      } else {
        localStorage.setItem("lightTheme", JSON.stringify(false));
      }
    }
  };

  return (
    <GlobalContext.Provider
      value={{ lightTheme, setLightTheme, fetchThemeInfo }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
