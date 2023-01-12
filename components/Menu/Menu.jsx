import MenuItem from "../MenuItem/MenuItem";
import { MenuContainer } from "./styles";

const Menu = ({ categories }) => {
  return (
    <MenuContainer>
      {categories.length &&
        categories.map((category) => {
          return (
            <MenuItem
              key={category.id}
              url={category.url}
              itemSubtitle={category.subtitle}
              itemTitle={category.title}
            />
          );
        })}
    </MenuContainer>
  );
};

export default Menu;
