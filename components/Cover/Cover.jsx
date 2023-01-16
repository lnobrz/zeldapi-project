import {
  BackgroundContainer,
  CoverContainer,
  PreTitle,
  Title,
  MainText,
  TextContainer,
} from "./styles";
import { Animated } from "react-animated-css";

const Cover = ({ preTitleText, titleText, mainText }) => {
  return (
    <BackgroundContainer>
      <CoverContainer>
        <TextContainer>
          <Animated
            animationIn="fadeIn"
            animationOut="fadeOut"
            isVisible={true}
          >
            {preTitleText && <PreTitle>{preTitleText}</PreTitle>}

            <Title>{titleText}</Title>

            {mainText && <MainText>{mainText}</MainText>}
          </Animated>
        </TextContainer>
      </CoverContainer>
    </BackgroundContainer>
  );
};

export default Cover;
