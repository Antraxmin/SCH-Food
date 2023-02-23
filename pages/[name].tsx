import { Store } from "@/types/store";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";

interface Props {
  store: Store;
}

const StoreDetail: NextPage<Props> = (store) => {
  return <div>식당 상세 페이지 테스트</div>;
};

export default StoreDetail;

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = [{ params: { name: "test" } }];
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async () => {
  return { props: {} };
};
