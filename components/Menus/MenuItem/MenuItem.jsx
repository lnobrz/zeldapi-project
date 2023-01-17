import {
  MenuItemContainer,
  MenuItemTitleContainer,
  MenuItemSubtitle,
  MenuItemTitle,
} from "./styles";
import Link from "next/link";
import { GlobalContext } from "../../../storage/global";
import { useContext } from "react";

const MenuItem = ({ url, itemSubtitle, itemTitle }) => {
  const globalContext = useContext(GlobalContext);

  return (
    <MenuItemContainer className="animated">
      <Link href={url} className="link">
        <MenuItemTitleContainer>
          <MenuItemSubtitle
            className={
              globalContext.lightTheme
                ? "lightThemeFontColor"
                : "darkThemeFontColor"
            }
          >
            {itemSubtitle}
          </MenuItemSubtitle>
          <MenuItemTitle
            className={
              globalContext.lightTheme
                ? "lightThemeFontColor"
                : "darkThemeFontColor"
            }
          >
            {itemTitle}
          </MenuItemTitle>
        </MenuItemTitleContainer>
      </Link>
    </MenuItemContainer>
  );
};

export default MenuItem;
