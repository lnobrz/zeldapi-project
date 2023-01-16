import { Animated } from "react-animated-css";
import { ItemCategory, ItemInfo } from "../styles";
import { useContext } from "react";
import { GlobalContext } from "../../../storage/global";

const AdditionalInfo = ({ category, data }) => {
  const globalContext = useContext(GlobalContext);
  return (
    <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true}>
      <ItemCategory
        className={
          globalContext.lightTheme
            ? "lightThemeFontColor"
            : "darkThemeFontColor"
        }
      >
        {`${category}: `}
        {data.map((content) => (
          <ItemInfo
            key={content.id}
            className={
              globalContext.lightTheme
                ? "lightThemeFontColor"
                : "darkThemeFontColor"
            }
          >
            {content.name}
          </ItemInfo>
        ))}
      </ItemCategory>
    </Animated>
  );
};

export default AdditionalInfo;
