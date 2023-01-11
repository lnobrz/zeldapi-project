import { GlobalStyle } from "./globalStyles";
import { bitter, kadwa, hyliaSerif } from "../public/fonts/fonts";

const App = ({ Component, pageProps }) => {
  return (
    <div className={[bitter.className, kadwa.className, hyliaSerif.className]}>
      <GlobalStyle />
      <Component {...pageProps} />;
    </div>
  );
};

export default App;
