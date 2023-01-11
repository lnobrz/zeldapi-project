import { useRouter } from "next/router";
import MobileHeader from "../../components/MobileHeader/MobileHeader";

const DetailPage = () => {
  const router = useRouter();
  const { monsterId } = router.query;

  return (
    <>
      <MobileHeader />
      <h1>{monsterId}</h1>
    </>
  );
};

export default DetailPage;
