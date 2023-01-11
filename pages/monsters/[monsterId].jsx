import { useRouter } from "next/router";

const DetailPage = () => {
  const router = useRouter();
  const { monsterId } = router.query;
  return (
    <>
      <h1>{monsterId}</h1>
    </>
  );
};

export default DetailPage;
