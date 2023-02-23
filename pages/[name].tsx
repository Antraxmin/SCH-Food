import DetailPage from "@/components/detail/DetailPage";
import useCurrentStore from "@/hooks/useCurrentStore";
import type { Store } from "@/types/store";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { useRouter } from "next/router";

interface Props {
  store: Store;
}

const StoreDetail: NextPage<Props> = ({ store }) => {
  const expanded = true;
  const router = useRouter();
  const { setCurrentStore } = useCurrentStore();
  const goToDetail = () => {
    setCurrentStore(store);
    router.push(`/${store.name}`);
  };
  return (
    <>
      <DetailPage currentStore={store} expanded={expanded} />
    </>
  );
};

export default StoreDetail;

export const getStaticPaths: GetStaticPaths = async () => {
  const stores = (await import(`${process.env.NEXT_PUBLIC_DB_URL}`)).default;
  const paths = stores.map((store: { name: any }) => ({
    params: { name: store.name },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const stores = (await import(`${process.env.NEXT_PUBLIC_DB_URL}`)).default;
  const store = stores.find(
    (store: { name: string | string[] | undefined }) =>
      store.name === params?.name
  );

  if (!store) {
    return {
      notFound: true, // 404 error
    };
  }

  return { props: { store } };
};
