import { useRouter } from "next/router";

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
