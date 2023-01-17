import Head from "next/head";
import IndexMain from "../components/IndexMain/IndexMain";
import Cover from "../components/Cover/Cover";
import { mainText, menuCategories } from "../storage/storage";

const Home = () => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
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
