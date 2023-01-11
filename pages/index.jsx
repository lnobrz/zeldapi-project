import HamburgerMenu from "../components/HamburgerMenu/HamburgerMenu";
import Logo from "../components/Logo/Logo";
import { MobileMenu } from "./styles";
const Home = () => {
  return (
    <>
      <MobileMenu>
        <Logo />
        <HamburgerMenu />
      </MobileMenu>
    </>
  );
};

export default Home;
