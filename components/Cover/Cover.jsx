import {
  BackgroundContainer,
  CoverContainer,
  PreTitle,
  Title,
  MainText,
} from "./styles";

const Cover = ({ preTitleText, titleText, mainText }) => {
  return (
    <BackgroundContainer>
      <CoverContainer>
        {preTitleText && <PreTitle>{preTitleText}</PreTitle>}
        <Title>{titleText}</Title>
        {mainText && <MainText>{mainText}</MainText>}
      </CoverContainer>
    </BackgroundContainer>
  );
};

export default Cover;
