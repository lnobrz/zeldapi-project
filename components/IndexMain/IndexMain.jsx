import { MainContainer, Title } from "./styles";
import IndexMenu from "../Menus/IndexMenu/IndexMenu";
import { GlobalContext } from "../../storage/global";
import { useContext } from "react";
import { Animated } from "react-animated-css";

const IndexMain = ({ title, categories }) => {
  const globalContext = useContext(GlobalContext);

  return (
    <MainContainer
      className={globalContext.lightTheme ? "lightThemeBg" : "darkThemeBg"}
    >
      <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true}>
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
          <IndexMenu categories={categories} />
        </nav>
      </Animated>
    </MainContainer>
  );
};

export default IndexMain;
