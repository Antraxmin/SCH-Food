import { Store } from "@/types/store";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";

interface Props {
  store: Store;
}

const StoreDetail: NextPage<Props> = ({ store: Store }) => {
  return <div>식당 상세 정보 페이지입니다.</div>;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const stores = (await import("../public/data.json")).default;
  const paths = stores.map((store) => ({ params: { name: store.name } }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const stores = (await import("../public/data.json")).default;
  const store = stores.find((store) => store.name === params?.name);

  // 요청한 식당 이름에 해당하는 데이터가 없다면 404 출력
  if (!store) {
    return {
      notFound: true,
    };
  }
  return { props: { store } };
};
