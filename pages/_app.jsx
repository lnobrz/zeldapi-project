import { GlobalStyle } from "./globalStyles";
import { bitter, kadwa, hyliaSerif } from "../public/fonts/fonts";
import MobileHeader from "../components/MobileHeader/MobileHeader";
import Footer from "../components/Footer/Footer";
import { GlobalStorage } from "../storage/global";

const App = ({ Component, pageProps }) => {
  return (
    <div className={[bitter.className, kadwa.className, hyliaSerif.className]}>
      <GlobalStorage>
        <GlobalStyle />
        <MobileHeader />
        <Component {...pageProps} />
        <Footer />
      </GlobalStorage>
    </div>
  );
};

export default App;
