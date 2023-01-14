import styled from "styled-components";
import { bitter } from "../../public/fonts/fonts";

export const Menu = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: start;
  flex-flow: column wrap;
`;

export const MenuItem = styled.li`
  height: 65px;
  width: 60%;
  margin: 15px 30px;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  border: 2px solid #b99047;
  font-family: ${bitter.style.fontFamily};
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  cursor: pointer;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  width: 100%;
  margin: 50px 0px;
  gap: 10px;
`;
export const MenuButton = styled.button`
  height: 65px;
  width: 80%;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  border: 2px solid #b99047;
  background: transparent;
  font-family: ${bitter.style.fontFamily};
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
`;
