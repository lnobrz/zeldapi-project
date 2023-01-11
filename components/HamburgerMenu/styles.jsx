import styled from "styled-components";

export const MenuButton = styled.button`
  background: none;
  margin-right: 30px;
  border: none;
`;

export const Menu = styled.nav`
  position: absolute;
  top: 85px;
  width: 100%;
  height: 170px;
  background: rgba(11, 20, 28, 0.89);
  z-index: 3;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MenuItem = styled.li`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #f0f0f0;
  text-transform: uppercase;
  text-align: center;
  margin-top: 10px;

  &:first-child {
    margin-top: 0px;
  }
`;
