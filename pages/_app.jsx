import { GlobalStyle } from "./globalStyles";
import { bitter, kadwa, hyliaSerif } from "../public/fonts/fonts";
import MobileHeader from "../components/MobileHeader/MobileHeader";
import Footer from "../components/Footer/Footer";

const App = ({ Component, pageProps }) => {
  return (
    <div className={[bitter.className, kadwa.className, hyliaSerif.className]}>
      <GlobalStyle />
      <MobileHeader />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
};

export default App;
