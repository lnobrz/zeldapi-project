import {
  ModalContainer,
  InfoContainer,
  ItemName,
  ItemInfo,
  ItemDescription,
  ModalButton,
  ModalBackground,
} from "./styles";
import Image from "next/image";
import { useState } from "react";

const InfoModal = ({ renderModal }) => {
  const [showModal, setShowModal] = useState(renderModal);

  const handleClick = () => {
    setShowModal(false);
  };

  return (
    <>
      {showModal && (
        <ModalBackground>
          <ModalContainer>
            <ModalButton onClick={handleClick}>
              <Image
                src="/icons/close-icon.svg"
                alt="hamburger menu icon"
                width={20}
                height={20}
              />
            </ModalButton>
            <InfoContainer>
              <ItemName>Fulana de Tal</ItemName>
              <ItemInfo>Cigana</ItemInfo>
              <ItemInfo>Sandrona</ItemInfo>
              <ItemDescription>
                industry. Lorem Ipsum has been the industrys standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the relea
              </ItemDescription>
            </InfoContainer>
          </ModalContainer>
        </ModalBackground>
      )}
    </>
  );
};

export default InfoModal;
