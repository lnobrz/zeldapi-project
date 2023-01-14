import { useContext } from "react";
import { ErrorContainer, ErrorDescription, ErrorTitle } from "./styles";
import { GlobalContext } from "../../storage/global";

const ErrorComponent = () => {
  const globalContext = useContext(GlobalContext);

  return (
    <ErrorContainer>
      <ErrorTitle
        className={
          globalContext.lightTheme
            ? "lightThemeFontColor"
            : "darkThemeFontColor"
        }
      >
        Something went wrong
      </ErrorTitle>
      <ErrorDescription
        className={
          globalContext.lightTheme
            ? "lightThemeFontColor"
            : "darkThemeFontColor"
        }
      >
        I’m so sorry that this is happening!
      </ErrorDescription>
      <ErrorDescription
        className={
          globalContext.lightTheme
            ? "lightThemeFontColor"
            : "darkThemeFontColor"
        }
      >
        Refresh the page and, if the error persists, try again later. You can
        also report the problem to me in my e-mail: lucasnobre37@outlook.com
      </ErrorDescription>
      <ErrorDescription
        className={
          globalContext.lightTheme
            ? "lightThemeFontColor"
            : "darkThemeFontColor"
        }
      >
        I appreciate your comprehension and I’m sure I’ll fix it as soon as
        possible.
      </ErrorDescription>
      <ErrorDescription
        className={
          globalContext.lightTheme
            ? "lightThemeFontColor"
            : "darkThemeFontColor"
        }
      >
        Att, Lucas Nobre, owner of Zeldapi Project.
      </ErrorDescription>
    </ErrorContainer>
  );
};

export default ErrorComponent;
