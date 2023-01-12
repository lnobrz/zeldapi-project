import { useRouter } from "next/router";
import MobileHeader from "../../components/MobileHeader/MobileHeader";
import Footer from "../../components/Footer/Footer";

const DetailPage = () => {
  const router = useRouter();
  const { characterId } = router.query;

  return (
    <>
      <h1>{characterId}</h1>
    </>
  );
};

export default DetailPage;
