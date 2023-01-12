import {
  MenuItemContainer,
  MenuItemDecoration,
  MenuItemTitleContainer,
  MenuItemSubtitle,
  MenuItemTitle,
} from "./styles";
import Image from "next/image";
import Link from "next/link";

const MenuItem = ({ url, itemSubtitle, itemTitle }) => {
  return (
    <MenuItemContainer>
      <MenuItemDecoration>
        <Image
          src="/illustrations/corner-decorator-left.png"
          alt="zeldapi logo"
          width={20}
          height={40}
        />
      </MenuItemDecoration>
      <Link href={url}>
        <MenuItemTitleContainer>
          <MenuItemSubtitle>{itemSubtitle}</MenuItemSubtitle>
          <MenuItemTitle>{itemTitle}</MenuItemTitle>
        </MenuItemTitleContainer>
      </Link>
      <MenuItemDecoration>
        <Image
          src="/illustrations/corner-decorator-right.png"
          alt="zeldapi logo"
          width={20}
          height={40}
        />
      </MenuItemDecoration>
    </MenuItemContainer>
  );
};

export default MenuItem;
