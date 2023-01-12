import Cover from "../../components/Cover/Cover";
import MobileHeader from "../../components/MobileHeader/MobileHeader";
import Footer from "../../components/Footer/Footer";
import Main from "../../components/Main/Main";

const Characters = () => {
  return (
    <>
      <Cover titleText="Characters" />
      <Main
        title="Characters"
        items={[
          { name: "Character 1" },
          { name: "Character 2" },
          { name: "Character 3" },
        ]}
      />
    </>
  );
};

export default Characters;
