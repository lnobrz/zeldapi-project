import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import Logo from "../Logo/Logo";
import { MobileMenu } from "./styles";

const MobileHeader = () => {
  return (
    <MobileMenu>
      <Logo />
      <HamburgerMenu />
    </MobileMenu>
  );
};

export default MobileHeader;
