import { useRouter } from "next/router";
import MobileHeader from "../../components/MobileHeader/MobileHeader";

const DetailPage = () => {
  const router = useRouter();
  const { characterId } = router.query;

  return (
    <>
      <MobileHeader />
      <h1>{characterId}</h1>
    </>
  );
};

export default DetailPage;
