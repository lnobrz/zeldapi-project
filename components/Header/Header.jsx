import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import Logo from "../Logo/Logo";
import { HeaderContainer } from "./styles";
import { GlobalContext } from "../../storage/global";
import { useContext, useEffect } from "react";
import DesktopMenu from "../DesktopMenu/DesktopMenu";

const Header = () => {
  const globalContext = useContext(GlobalContext);

  useEffect(() => {
    globalContext.getDevice();
    globalContext.fetchThemeInfo();
  }, [globalContext]);

  return (
    <HeaderContainer
      className={globalContext.lightTheme ? "lightThemeBg" : "darkThemeBg"}
    >
      <Logo />
      {globalContext.isMobile ? <HamburgerMenu /> : <DesktopMenu />}
    </HeaderContainer>
  );
};

export default Header;
