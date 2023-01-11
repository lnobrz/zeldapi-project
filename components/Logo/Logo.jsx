import { LogoImage } from "./styles";
import Image from "next/image";

const Logo = () => {
  return (
    <LogoImage>
      <Image
        src="/assets/illustrations/logo.svg"
        alt="zeldapi logo"
        width={100}
        height={20}
      />
    </LogoImage>
  );
};

export default Logo;
