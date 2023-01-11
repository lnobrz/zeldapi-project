import { useRouter } from "next/router";
import MobileHeader from "../../components/MobileHeader/MobileHeader";

const DetailPage = () => {
  const router = useRouter();
  const { placeId } = router.query;

  return (
    <>
      <MobileHeader />
      <h1>{placeId}</h1>
    </>
  );
};

export default DetailPage;
