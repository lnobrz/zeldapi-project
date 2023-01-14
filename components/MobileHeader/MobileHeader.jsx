import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import Logo from "../Logo/Logo";
import { MobileMenu } from "./styles";
import { GlobalContext } from "../../storage/global";
import { useContext, useEffect } from "react";

const MobileHeader = () => {
  const globalContext = useContext(GlobalContext);

  useEffect(() => {
    globalContext.fetchThemeInfo();
  }, [globalContext]);

  return (
    <MobileMenu
      className={globalContext.lightTheme ? "lightThemeBg" : "darkThemeBg"}
    >
      <Logo />
      <HamburgerMenu />
    </MobileMenu>
  );
};

export default MobileHeader;
