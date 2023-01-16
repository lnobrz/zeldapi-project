import { useContext, useRef, useCallback, useEffect } from "react";
import Image from "next/image";
import { GlobalContext } from "../../storage/global";
import { SearchBarContainer } from "./styles";

const SearchBar = ({
  category,
  foundItemSetter,
  showFoundItemSetter,
  maxItemQuantitySetter,
}) => {
  const globalContext = useContext(GlobalContext);
  const input = useRef(null);
  const initialItemQuantity = globalContext.isMobile ? 6 : 8;

  const searchInput = useCallback(() => {
    maxItemQuantitySetter(initialItemQuantity);
    const inputContent = input.current.value
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .toString()
      .replace(",", "%20");

    fetch(
      `http://zelda.fanapis.com/api/${category}?name=${inputContent}&limit=50`
    )
      .then((res) => res.json())
      .then((res) => {
        foundItemSetter(res.data);
        return res;
      });
    showFoundItemSetter(true);
  }, [
    category,
    showFoundItemSetter,
    initialItemQuantity,
    foundItemSetter,
    maxItemQuantitySetter,
  ]);

  const handleEnterClick = (event, category) => {
    if (event.key === "Enter") {
      searchInput(category);
    }
  };

  const clickSearch = (event) => {
    const searchButton = document.getElementById("searchButton");

    if (event.key === "Enter") {
      searchButton.click();
    }
  };

  useEffect(() => {
    input.current.addEventListener(onkeyup, clickSearch);
  }, []);

  return (
    <SearchBarContainer>
      <input
        type="text"
        name="search"
        id="searchInput"
        autoComplete="off"
        className={
          globalContext.lightTheme
            ? "lightThemeFontColor"
            : "darkThemeFontColor"
        }
        ref={input}
        onKeyUp={(event) => handleEnterClick(event, "characters")}
      />
      <Image
        src={
          globalContext.lightTheme
            ? "/icons/light-theme/light-theme-search-icon.svg"
            : "/icons/dark-theme/dark-theme-search-icon.svg"
        }
        alt="search icon"
        width={20}
        height={20}
        style={{ position: "absolute", right: "30px", top: "20px" }}
        onClick={() => searchInput(category)}
        id="searchButton"
      />
    </SearchBarContainer>
  );
};

export default SearchBar;
