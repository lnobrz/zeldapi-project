import Cover from "../../components/Cover/Cover";
import MobileHeader from "../../components/MobileHeader/MobileHeader";
import Footer from "../../components/Footer/Footer";
import Main from "../../components/Main/Main";

const Places = () => {
  return (
    <>
      <MobileHeader />
      <Cover titleText="Places" />
      <Main
        title="Places"
        items={[{ name: "place 1" }, { name: "place 2" }, { name: "place 3" }]}
      />
      <Footer />
    </>
  );
};

export default Places;
