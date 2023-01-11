import Cover from "../components/Cover/Cover";
import MobileHeader from "../components/MobileHeader/MobileHeader";

const mainText =
  "I am Lucas Nobre and I’m here to show you my frontend programming skills. In this project, you’ll be able to dive deep into the universe of The Legends of Zelda, in an application where you’ll get to know a little bit more about the characters, monsters and places of this amazing universe.";

const Home = () => {
  return (
    <>
      <MobileHeader />
      <Cover
        preTitleText="Welcome to"
        titleText="Zeldapi"
        mainText={mainText}
      />
    </>
  );
};

export default Home;
