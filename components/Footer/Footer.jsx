import {
  BackgroundContainer,
  ContactItem,
  FooterContainer,
  FooterTitle,
  RightsContainer,
} from "./styles";
import Logo from "../Logo/Logo";

const Footer = () => {
  return (
    <BackgroundContainer>
      <FooterContainer>
        <Logo />
        <FooterTitle>Liked my job? Contact me!</FooterTitle>
        <ul>
          <ContactItem>lucasnobre37@outlook.com</ContactItem>
          <ContactItem>https://github.com/lnobrz</ContactItem>
          <ContactItem>https://www.linkedin.com/in/lucas-nobrz/</ContactItem>
        </ul>
        <RightsContainer>
          Lucas Nobre, 2023. Some Rights Reserved.
        </RightsContainer>
      </FooterContainer>
    </BackgroundContainer>
  );
};

export default Footer;
