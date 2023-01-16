import { useEffect, useState, useCallback } from "react";
import {
  ModalContainer,
  InfoContainer,
  ItemName,
  ItemInfo,
  ItemDescription,
  ModalButton,
  ModalBackground,
  ItemCategory,
} from "./styles";
import Image from "next/image";
import { GlobalContext } from "../../storage/global";
import { useContext } from "react";
import ErrorComponent from "../Error/ErrorComponent";
import { Animated } from "react-animated-css";

const InfoModal = ({ renderModal, renderModalSetter, item, error }) => {
  const globalContext = useContext(GlobalContext);
  const [itemAppearances, setItemAppearances] = useState([]);
  const [itemInhabitants, setItemInnhabitants] = useState([]);

  const itemDetails = item
    ? Object.entries(item).filter(
        (detail) =>
          detail[0] !== "name" &&
          detail[0] !== "description" &&
          detail[0] !== "id" &&
          detail[0] !== "appearances" &&
          detail[0] !== "inhabitants"
      )
    : null;

  const closeModal = () => {
    renderModalSetter(false);
    document.querySelector("body").classList.remove("noScroll");
  };

  const fetchInfo = useCallback(async () => {
    if (item) {
      if (item.inhabitants) {
        const inhabitantsResponse = await Promise.all(
          item.inhabitants.map((url) =>
            fetch(url)
              .then((res) => res.json())
              .then((inhabitant) => inhabitant.data)
          )
        );

        setItemInnhabitants(inhabitantsResponse);
      }

      if (item.appearances) {
        const appearanceResponse = await Promise.all(
          item.appearances.map((url) =>
            fetch(url)
              .then((res) => res.json())
              .then((appearance) => appearance.data)
          )
        );
        setItemAppearances(appearanceResponse);
      }
    }
  }, [item]);

  useEffect(() => {
    fetchInfo();
  }, [fetchInfo]);

  return (
    <>
      {renderModal && (
        <ModalBackground>
          <Animated
            animationIn="fadeIn"
            animationOut="fadeOut"
            isVisible={true}
            className={`${
              globalContext.lightTheme ? "lightThemeBg" : "darkThemeBg"
            } modalContainer`}
          >
            <ModalButton onClick={closeModal}>
              <Image
                src={
                  globalContext.lightTheme
                    ? "/icons/light-theme/light-theme-close-icon.svg"
                    : "/icons/dark-theme/dark-theme-close-icon.svg"
                }
                alt="hamburger menu icon"
                width={20}
                height={20}
              />
            </ModalButton>
            <InfoContainer>
              {error && (
                <ErrorComponent
                  title="SOMETHING WENT WRONG"
                  message="Refresh the page and try again or come back later. If the problem persists, mail me at: lucasnobre37@outlook.com"
                />
              )}
              {item && (
                <>
                  <ItemName
                    className={
                      globalContext.lightTheme
                        ? "lightThemeFontColor"
                        : "darkThemeFontColor"
                    }
                  >
                    {item.name}
                  </ItemName>
                  {itemDetails.map((detail) => (
                    <ItemCategory
                      key={detail[0]}
                      c
                      className={
                        globalContext.lightTheme
                          ? "lightThemeFontColor"
                          : "darkThemeFontColor"
                      }
                    >
                      {detail[0]}:
                      <ItemInfo
                        className={
                          globalContext.lightTheme
                            ? "lightThemeFontColor"
                            : "darkThemeFontColor"
                        }
                      >
                        {detail[1] ? detail[1] : "not identified"}
                      </ItemInfo>
                    </ItemCategory>
                  ))}
                  {itemAppearances && itemAppearances.length > 0 && (
                    <Animated
                      animationIn="fadeIn"
                      animationOut="fadeOut"
                      isVisible={true}
                    >
                      <ItemCategory
                        className={
                          globalContext.lightTheme
                            ? "lightThemeFontColor"
                            : "darkThemeFontColor"
                        }
                      >
                        appearances:
                        {itemAppearances.map((appearance) => (
                          <ItemInfo
                            key={appearance.id}
                            className={
                              globalContext.lightTheme
                                ? "lightThemeFontColor"
                                : "darkThemeFontColor"
                            }
                          >
                            {appearance.name}
                          </ItemInfo>
                        ))}
                      </ItemCategory>
                    </Animated>
                  )}
                  {itemInhabitants && itemInhabitants.length > 0 && (
                    <Animated
                      animationIn="fadeIn"
                      animationOut="fadeOut"
                      isVisible={true}
                    >
                      <ItemCategory
                        className={
                          globalContext.lightTheme
                            ? "lightThemeFontColor"
                            : "darkThemeFontColor"
                        }
                      >
                        inhabitants:
                        {itemAppearances.map((inhabitant) => (
                          <ItemInfo
                            key={inhabitant.id}
                            className={
                              globalContext.lightTheme
                                ? "lightThemeFontColor"
                                : "darkThemeFontColor"
                            }
                          >
                            {inhabitant.name}
                          </ItemInfo>
                        ))}
                      </ItemCategory>
                    </Animated>
                  )}
                  <ItemDescription
                    className={
                      globalContext.lightTheme
                        ? "lightThemeFontColor"
                        : "darkThemeFontColor"
                    }
                  >
                    {item.description}
                  </ItemDescription>
                </>
              )}
            </InfoContainer>
          </Animated>
        </ModalBackground>
      )}
    </>
  );
};

export default InfoModal;
