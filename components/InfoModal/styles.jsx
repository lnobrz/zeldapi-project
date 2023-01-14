import styled from "styled-components";
import { bitter } from "../../public/fonts/fonts";

export const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 3;
`;

export const ModalContainer = styled.div`
  width: 80%;
  height: 80%;
  border: 2px solid #b99047;
  position: relative;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
`;

export const InfoContainer = styled.section`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
`;

export const ItemName = styled.h1`
  font-family: "Bitter";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  text-align: center;
  margin-bottom: 20px;
`;

export const ItemCategory = styled.p`
  font-family: ${bitter.style.fontFamily};
  font-style: normal;
  font-weight: 900;
  font-size: 12px;
  text-transform: uppercase;
  line-height: 14px;
  text-align: center;
  color: #b99047;
`;

export const ItemInfo = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  text-align: center;
  margin: 10px 0px;
`;

export const ItemDescription = styled.p`
  width: 80%;
  max-height: 250px;
  overflow: auto;
  font-family: ${bitter.style.fontFamily};
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  box-sizing: border-box;
  margin-top: 50px;
`;

export const ModalButton = styled.button`
  background: none;
  width: 20px;
  height: 20px;
  border: none;
  pointer-events: auto;
  cursor: pointer;
  align-self: flex-end;
  position: absolute;
  top: 30px;
  right: 30px;
`;
