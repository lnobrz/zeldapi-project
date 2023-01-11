import { useState, useEffect } from "react";
import { MenuButton, Menu, MenuItem } from "./styles";
import Image from "next/image";
import Link from "next/link";

const HamburgerMenu = () => {
  const [closedMenu, setClosedMenu] = useState(true);

  useEffect(() => {
    setClosedMenu(true);
  }, []);

  const handleClick = () => {
    setClosedMenu((previousValue) => !previousValue);
  };

  return (
    <>
      {closedMenu ? (
        <MenuButton onClick={handleClick}>
          <Image
            src="/assets/icons/hamburger-menu.svg"
            alt="hamburger menu icon"
            width={20}
            height={20}
          />
        </MenuButton>
      ) : (
        <>
          <MenuButton onClick={handleClick}>
            <Image
              src="/assets/icons/close-icon.svg"
              alt="hamburger menu icon"
              width={20}
              height={20}
            />
          </MenuButton>
          <Menu>
            <ul>
              <MenuItem>
                <Link href="/" className="menuLink">
                  Home
                </Link>
              </MenuItem>
              <MenuItem>
                <Link href="/characters" className="menuLink">
                  Characters
                </Link>
              </MenuItem>
              <MenuItem>
                <Link href="/monsters" className="menuLink">
                  Monsters
                </Link>
              </MenuItem>
              <MenuItem>
                <Link href="/places" className="menuLink">
                  Places
                </Link>
              </MenuItem>
            </ul>
          </Menu>
        </>
      )}
    </>
  );
};

export default HamburgerMenu;
