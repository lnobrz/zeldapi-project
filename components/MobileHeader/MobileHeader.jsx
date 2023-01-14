import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import Logo from "../Logo/Logo";
import { MobileMenu } from "./styles";
import { GlobalContext } from "../../storage/global";
import { useContext, useEffect } from "react";
import DesktopMenu from "../DesktopMenu/DesktopMenu";

const MobileHeader = () => {
  const globalContext = useContext(GlobalContext);

  useEffect(() => {
    globalContext.getDevice();
    globalContext.fetchThemeInfo();
  }, [globalContext]);

  return (
    <MobileMenu
      className={globalContext.lightTheme ? "lightThemeBg" : "darkThemeBg"}
    >
      <Logo />
      {globalContext.isMobile ? <HamburgerMenu /> : <DesktopMenu />}
    </MobileMenu>
  );
};

export default MobileHeader;
