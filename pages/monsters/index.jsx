import Cover from "../../components/Cover/Cover";
import MobileHeader from "../../components/MobileHeader/MobileHeader";
import Footer from "../../components/Footer/Footer";
import Main from "../../components/Main/Main";

const Monsters = () => {
  return (
    <>
      <MobileHeader />
      <Cover titleText="Monsters" />
      <Main
        title="monsters"
        items={[
          { name: "Monster 1" },
          { name: "Monster 2" },
          { name: "Monster 3" },
        ]}
      />
      <Footer />
    </>
  );
};

export default Monsters;
