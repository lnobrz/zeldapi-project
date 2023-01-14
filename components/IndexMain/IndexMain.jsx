import { MainContainer, Title } from "./styles";
import Menu from "../Menu/Menu";
import { GlobalContext } from "../../storage/global";
import { useContext } from "react";

const IndexMain = ({ title, categories }) => {
  const globalContext = useContext(GlobalContext);

  return (
    <MainContainer
      className={globalContext.lightTheme ? "lightThemeBg" : "darkThemeBg"}
    >
      <Title
        className={
          globalContext.lightTheme
            ? "lightThemeFontColor"
            : "darkThemeFontColor"
        }
      >
        {title}
      </Title>
      <nav>
        <Menu categories={categories} />
      </nav>
    </MainContainer>
  );
};

export default IndexMain;
