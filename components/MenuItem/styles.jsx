import styled from "styled-components";
import { bitter, kadwa } from "../../public/fonts/fonts";

export const MenuItemContainer = styled.li`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  flex-flow: row nowrap;
  margin-top: 20px;

  &:first-child {
    margin-top: 0px;
  }
`;

export const MenuItemDecoration = styled.div`
  width: 21px;
  height: 40px;
  margin: 0px 30px;
`;

export const MenuItemTitleContainer = styled.div`
  display: flex;
  flex-flow: column wrap;
  align-items: center;
`;

export const MenuItemSubtitle = styled.h3`
  font-family: ${bitter.style.fontFamily};
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #f0f0f0;
  text-transform: capitalize;
`;

export const MenuItemTitle = styled.h2`
  font-family: ${kadwa.style.fontFamily};
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 40px;
  color: #f0f0f0;
  text-transform: uppercase;
`;