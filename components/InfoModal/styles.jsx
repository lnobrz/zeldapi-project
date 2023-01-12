import styled from "styled-components";
import { bitter } from "../../public/fonts/fonts";

export const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalContainer = styled.div`
  width: 80%;
  height: 500px;
  background: linear-gradient(180deg, #0b131b 0%, #032520 100%);
  display: flex;
  flex-flow: column wrap;
  border: 2px solid #b99047;
`;

export const InfoContainer = styled.section`
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  margin-top: 30px;
`;

export const ItemName = styled.h1`
  font-family: "Bitter";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  text-align: center;
  color: #f0f0f0;
  margin-bottom: 20px;
`;

export const ItemInfo = styled.h2`
  font-family: ${bitter.style.fontFamily};
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  text-align: center;
  color: #f0f0f0;
  margin-bottom: 5px;
`;

export const ItemDescription = styled.p`
  width: 80%;
  font-family: ${bitter.style.fontFamily};
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: #f0f0f0;
  margin-top: 50px;
`;

export const ModalButton = styled.button`
  background: none;
  width: 20px;
  height: 20px;
  margin: 24px 38px 0px 0px;
  border: none;
  pointer-events: auto;
  cursor: pointer;
  align-self: flex-end;
`;
