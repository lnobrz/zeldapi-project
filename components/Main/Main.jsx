import { MainContainer, Title } from "../IndexMain/styles";
import { MenuItem, Menu, MenuButton } from "./styles";

const Main = ({ title, items }) => {
  return (
    <MainContainer>
      <Title>{title}</Title>
      <Menu>
        {items.length &&
          items.map((item) => {
            return <MenuItem key={item.name}>{item.name}</MenuItem>;
          })}
        <MenuButton>See more</MenuButton>
      </Menu>
    </MainContainer>
  );
};

export default Main;
