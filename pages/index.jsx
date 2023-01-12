import IndexMain from "../components/IndexMain/IndexMain";
import Cover from "../components/Cover/Cover";
import MobileHeader from "../components/MobileHeader/MobileHeader";
import Footer from "../components/Footer/Footer";
import { mainText, menuCategories } from "../storage/storage";

const Home = () => {
  return (
    <>
      <Cover
        preTitleText="Welcome to"
        titleText="Zeldapi"
        mainText={mainText}
      />
      <IndexMain
        title="What do you want to do today?"
        categories={menuCategories}
      />
    </>
  );
};

export default Home;
