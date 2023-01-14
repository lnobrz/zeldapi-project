import { MainContainer, Title } from "../IndexMain/styles";
import { MenuItem, Menu, MenuButton, ButtonsContainer } from "./styles";
import ErrorComponent from "../Error/ErrorComponent";
import { useState, useEffect, useContext } from "react";
import { GlobalContext } from "../../storage/global";
import InfoModal from "../InfoModal/InfoModal";

const Main = ({ category, title, items, error }) => {
  const globalContext = useContext(GlobalContext);
  const [maxItemQuantity, setMaxItemQuantity] = useState(6);
  const [adjustedItems, setAdjustedItems] = useState(
    items ? items.slice(0, maxItemQuantity) : null
  );
  const [chosenItem, setChosenItem] = useState(undefined);
  const [showModal, setShowModal] = useState(false);

  const showItemsToggle = (bool) => {
    if (bool === true) {
      setMaxItemQuantity((previousValue) => previousValue + 6);
    }
    if (bool === false && maxItemQuantity >= 12) {
      setMaxItemQuantity((previousValue) => previousValue - 6);
    }
  };

  const fetchModalInfo = async (category, id) => {
    try {
      fetch(`http://zelda.fanapis.com/api/${category}/${id}`)
        .then((res) => res.json())
        .then((res) => setChosenItem(res.data));
    } catch (err) {
      return err;
    }
  };

  const renderModal = async (category, id) => {
    fetchModalInfo(category, id);
    document.querySelector("body").classList.add("noScroll");
    setShowModal(true);
  };

  useEffect(() => {
    setAdjustedItems(items ? items.slice(0, maxItemQuantity) : null);
  }, [items, maxItemQuantity]);

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
          <Menu>
            {adjustedItems.map((item) => {
              return (
                <MenuItem
                  key={item.id}
                  onClick={() => renderModal(category, item.id)}
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
            <ButtonsContainer>
              {maxItemQuantity < items.length && (
                <MenuButton
                  className={
                    globalContext.lightTheme
                      ? "lightThemeFontColor"
                      : "darkThemeFontColor"
                  }
                  onClick={() => {
                    showItemsToggle(true);
                  }}
                >
                  See more
                </MenuButton>
              )}
              {maxItemQuantity > 6 && (
                <MenuButton
                  className={
                    globalContext.lightTheme
                      ? "lightThemeFontColor"
                      : "darkThemeFontColor"
                  }
                  onClick={() => {
                    showItemsToggle(false);
                  }}
                >
                  See less
                </MenuButton>
              )}
            </ButtonsContainer>
          </Menu>
        </>
      )}
      {error && <ErrorComponent />}
    </MainContainer>
  );
};

export default Main;
