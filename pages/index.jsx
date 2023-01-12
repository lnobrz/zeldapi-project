import Main from "../components/Main/Main";
import Cover from "../components/Cover/Cover";
import MobileHeader from "../components/MobileHeader/MobileHeader";
import Footer from "../components/Footer/Footer";

const mainText =
  "I am Lucas Nobre and I’m here to show you my frontend programming skills and, for it, I'll take you to a trip to the universe of The Legend of Zelda.";

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
      <Footer />
    </>
  );
};

export default Home;
