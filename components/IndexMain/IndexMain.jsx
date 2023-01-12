import { MainContainer, Title } from "./styles";
import Menu from "../Menu/Menu";

const IndexMain = ({ title, categories }) => {
  return (
    <MainContainer>
      <Title>{title}</Title>
      <nav>
        <Menu categories={categories} />
      </nav>
    </MainContainer>
  );
};

export default IndexMain;
