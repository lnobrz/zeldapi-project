import { MainContainer, Title } from "../IndexMain/styles";
import { MenuItem, Menu, MenuButton, ButtonsContainer } from "./styles";
import ErrorComponent from "../Error/ErrorComponent";
import { useState, useEffect, useContext, useCallback, useRef } from "react";
import { GlobalContext } from "../../storage/global";
import InfoModal from "../InfoModal/InfoModal";
import SearchBar from "../SearchBar/SearchBar";

const Main = ({ category, title, items, error }) => {
  const [fetchedItems, setFetchedItems] = useState(items);
  const [nextApiPage, setNextApiPage] = useState(1);
  const [nextSearchPage, setNextSearchPage] = useState(1);
  const globalContext = useContext(GlobalContext);
  const initialItemQuantity = globalContext.isMobile ? 6 : 8;
  const [maxItemQuantity, setMaxItemQuantity] = useState(initialItemQuantity);
  const [adjustedItems, setAdjustedItems] = useState(
    fetchedItems ? fetchedItems.slice(0, maxItemQuantity) : null
  );
  const [chosenItem, setChosenItem] = useState(undefined);
  const [showModal, setShowModal] = useState(false);
  const [foundItem, setFoundItem] = useState([]);
  const [adjustedFoundItems, setAdjustedFoundItems] = useState(
    foundItem ? foundItem.slice(0, maxItemQuantity) : []
  );
  const [showFoundItem, setShowFoundItem] = useState(false);

  const showItemsToggle = (bool) => {
    if (bool === true) {
      setMaxItemQuantity(
        (previousValue) => previousValue + initialItemQuantity
      );
    }
    if (bool === false && maxItemQuantity >= initialItemQuantity * 2) {
      setMaxItemQuantity(
        (previousValue) => previousValue - initialItemQuantity
      );
    }
  };

  const fetchModalInfo = async (id) => {
    console.log("categoria", category);
    console.log("id", id);
    try {
      fetch(`http://zelda.fanapis.com/api/${category}/${id}`)
        .then((res) => res.json())
        .then((res) => setChosenItem(res.data));
    } catch (err) {
      console.log(err);
    }
  };

  const fetchNextPageInfo = async (bool) => {
    if (maxItemQuantity >= fetchedItems.length) {
      try {
        fetch(
          `http://zelda.fanapis.com/api/${category}?limit=50&page=${nextApiPage}`
        )
          .then((res) => res.json())
          .then((res) => {
            setFetchedItems([...fetchedItems, ...res.data]);
            return res;
          });
        setNextApiPage((previousValue) => ++previousValue);
      } catch (err) {
        console.log(err);
      }
    }

    showItemsToggle(bool);
  };

  const fetchNextSearchInfo = (bool) => {
    if (maxItemQuantity >= foundItem.length) {
      const itemName = document
        .getElementById("searchInput")
        .value.toLowerCase()
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .toString()
        .replace(",", "%20");
      try {
        fetch(
          `http://zelda.fanapis.com/api/${category}?name=${itemName}&limit=50&page=${nextSearchPage}`
        )
          .then((res) => res.json())
          .then((res) => setFoundItem([...foundItem, ...res.data]));
        setNextSearchPage((previousValue) => ++previousValue);
      } catch (err) {
        console.log(err);
      }
    }

    showItemsToggle(bool);
  };

  const renderModal = async (id) => {
    fetchModalInfo(id);
    document.querySelector("body").classList.add("noScroll");
    setShowModal(true);
  };

  const returnToMainScreen = () => {
    input.current.value = "";
    setFoundItem(null);
    setShowFoundItem(false);
  };

  useEffect(() => {
    setAdjustedItems(
      fetchedItems ? fetchedItems.slice(0, maxItemQuantity) : null
    );
    setAdjustedFoundItems(
      foundItem ? foundItem.slice(0, maxItemQuantity) : null
    );
  }, [fetchedItems, maxItemQuantity, foundItem]);

  return (
    <MainContainer
      className={globalContext.lightTheme ? "lightThemeBg" : "darkThemeColoBg"}
    >
      {showModal && chosenItem && (
        <InfoModal
          renderModal={showModal}
          renderModalSetter={setShowModal}
          item={chosenItem}
          error={chosenItem ? false : true}
        />
      )}
      {adjustedItems && adjustedItems.length > 0 && (
        <>
          <Title
            className={
              globalContext.lightTheme
                ? "lightThemeFontColor"
                : "darkThemeFontColor"
            }
          >
            {title}
          </Title>
          <SearchBar
            category="characters"
            foundItemSetter={setFoundItem}
            showFoundItemSetter={setShowFoundItem}
            maxItemQuantitySetter={setMaxItemQuantity}
          />
          <Menu>
            {showFoundItem &&
              adjustedFoundItems &&
              adjustedFoundItems.length > 0 && (
                <>
                  {adjustedFoundItems.map((item) => {
                    return (
                      <>
                        <MenuItem
                          key={item.id}
                          onClick={() => renderModal(item.id)}
                          className={
                            globalContext.lightTheme
                              ? "lightThemeFontColor"
                              : "darkThemeFontColor"
                          }
                        >
                          {item.name}
                        </MenuItem>
                      </>
                    );
                  })}
                  <ButtonsContainer>
                    {foundItem && foundItem.length > maxItemQuantity && (
                      <MenuButton
                        className={
                          globalContext.lightTheme
                            ? "lightThemeFontColor"
                            : "darkThemeFontColor"
                        }
                        onClick={() => fetchNextSearchInfo(true)}
                      >
                        See more
                      </MenuButton>
                    )}

                    {maxItemQuantity > initialItemQuantity && (
                      <MenuButton
                        className={
                          globalContext.lightTheme
                            ? "lightThemeFontColor"
                            : "darkThemeFontColor"
                        }
                        onClick={() => {
                          fetchNextSearchInfo(false);
                        }}
                      >
                        See less
                      </MenuButton>
                    )}
                    <MenuButton
                      className={[
                        globalContext.lightTheme
                          ? "lightThemeFontColor"
                          : "darkThemeFontColor",
                        "returnButton",
                      ]}
                      onClick={returnToMainScreen}
                    >
                      Return
                    </MenuButton>
                  </ButtonsContainer>
                </>
              )}

            {showFoundItem &&
              adjustedFoundItems &&
              adjustedFoundItems.length === 0 && (
                <>
                  <ErrorComponent
                    title="NOT FOUND"
                    message="The item you’re searching for doesn’t exists in our database. If you’re sure it exists, make sure you’ve typed it correctly."
                  />
                </>
              )}
            {!showFoundItem &&
              adjustedItems &&
              adjustedItems.map((item) => {
                return (
                  <MenuItem
                    key={item.id}
                    onClick={() => renderModal(item.id)}
                    className={
                      globalContext.lightTheme
                        ? "lightThemeFontColor"
                        : "darkThemeFontColor"
                    }
                  >
                    {item.name}
                  </MenuItem>
                );
              })}
          </Menu>
          {!showFoundItem && adjustedItems && (
            <ButtonsContainer>
              <MenuButton
                className={
                  globalContext.lightTheme
                    ? "lightThemeFontColor"
                    : "darkThemeFontColor"
                }
                onClick={() => {
                  fetchNextPageInfo(true);
                }}
              >
                See more
              </MenuButton>
              {maxItemQuantity > initialItemQuantity && (
                <MenuButton
                  className={
                    globalContext.lightTheme
                      ? "lightThemeFontColor"
                      : "darkThemeFontColor"
                  }
                  onClick={() => {
                    fetchNextPageInfo(false);
                  }}
                >
                  See less
                </MenuButton>
              )}
            </ButtonsContainer>
          )}
        </>
      )}
      {error && <ErrorComponent />}
    </MainContainer>
  );
};

export default Main;
