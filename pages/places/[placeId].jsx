import { useRouter } from "next/router";

const DetailPage = () => {
  const router = useRouter();
  const { placeId } = router.query;
  return (
    <>
      <h1>{placeId}</h1>
    </>
  );
};

export default DetailPage;
