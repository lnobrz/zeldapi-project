import styled from "styled-components";

export const MenuButton = styled.button`
  background: none;
  width: 20px;
  height: 20px;
  margin-right: 30px;
  border: none;
  pointer-events: auto;
  cursor: pointer;
`;

export const Menu = styled.nav`
  position: absolute;
  top: 85px;
  width: 100%;
  height: 40%;
  background: rgba(11, 20, 28, 0.89);
  z-index: 3;
  overflow: hidden;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
`;

export const MenuItem = styled.li`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 1em;
  line-height: 19px;
  color: #f0f0f0;
  text-transform: uppercase;
  text-align: center;
  margin-top: 10px;

  &:first-child {
    margin-top: 0px;
  }

  @media (min-width: 744px) {
    margin-top: 0px;
    color: transparent;
    &:not(:last-child) {
      margin-right: 20px;
    }
    &:last-child {
      margin-top: 10px;
    }
  }
`;

export const DarkModeToggle = styled.button`
  background: none;
  width: 50px;
  height: 50px;
  border: none;
  pointer-events: auto;
  cursor: pointer;
  margin-top: 50px;

  @media (min-width: 744px) {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    margin-top: 30px;
    margin-bottom: 30px;
    margin: 30px 0px 30px 30px;
  }
`;
