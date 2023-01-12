import Main from "../components/Main/Main";
import Cover from "../components/Cover/Cover";
import MobileHeader from "../components/MobileHeader/MobileHeader";

const mainText =
  "I am Lucas Nobre and I’m here to show you my frontend programming skills. In this project, you’ll be able to dive deep into the universe of The Legends of Zelda, in an application where you’ll get to know a little bit more about the characters, monsters and places of this amazing universe.";

const menuCategories = [
  {
    id: 1,
    title: "characters",
    subtitle: "meet",
    url: "/characters",
  },
  {
    id: 2,
    title: "monsters",
    subtitle: "face",
    url: "/monsters",
  },
  {
    id: 3,
    title: "places",
    subtitle: "discover",
    url: "/places",
  },
];

const Home = () => {
  return (
    <>
      <MobileHeader />
      <Cover
        preTitleText="Welcome to"
        titleText="Zeldapi"
        mainText={mainText}
      />
      <Main title="What do you want to do today?" categories={menuCategories} />
    </>
  );
};

export default Home;
