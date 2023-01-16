import { createContext, useState } from "react";

export const GlobalContext = createContext();

export const GlobalStorage = ({ children }) => {
  const [lightTheme, setLightTheme] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const fetchThemeInfo = () => {
    if (typeof window !== undefined) {
      if (localStorage.getItem("lightTheme")) {
        setLightTheme(JSON.parse(localStorage.getItem("lightTheme")));
      } else {
        localStorage.setItem("lightTheme", JSON.stringify(false));
      }
    }
  };

  const getDevice = () => {
    window.innerWidth < 744 ? setIsMobile(true) : setIsMobile(false);
    window.addEventListener("resize", () => {
      window.innerWidth < 744 ? setIsMobile(true) : setIsMobile(false);
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        lightTheme,
        setLightTheme,
        fetchThemeInfo,
        getDevice,
        isMobile,
        setIsMobile,
        isLoading,
        setIsLoading,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
