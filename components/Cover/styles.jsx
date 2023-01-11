import styled from "styled-components";
import { bitter, hyliaSerif, kadwa } from "../../public/fonts/fonts";

export const BackgroundContainer = styled.section`
  background-image: url("/illustrations/background-1.jpg");
  width: 100%;
  height: 335px;
  background-size: cover;
  background-repeat: no-repeat;
  border-bottom: 3px solid #d3ac5c;
`;

export const CoverContainer = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  border-bottom: 3px solid #d3ac5c;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
`;

export const PreTitle = styled.h2`
  font-family: ${bitter.style.fontFamily};
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 12px;
  color: #f0f0f0;
`;

export const Title = styled.h1`
  font-family: ${hyliaSerif.style.fontFamily};
  font-style: normal;
  font-weight: 400;
  font-size: 48px;
  line-height: 45px;
  color: #f0f0f0;
`;

export const MainText = styled.p`
  font-family: ${bitter.style.fontFamily};
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  color: #f0f0f0;
  margin: 26px 30px;
`;
