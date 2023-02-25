import BottomNav from "@/components/common/BottomNav";
import Header from "@/components/common/Header";
import ListSection from "@/components/List/ListSection";
import useStore from "@/hooks/useStore";
import clientPromise from "@/lib/mongodb";
import { Store } from "@/types/store";
import { GetServerSidePropsContext, NextPage } from "next";
import { Fragment, useEffect } from "react";
import UnivCategory from "@/components/univ/Category";

interface Props {
  store: Store[];
}

const UnivList: NextPage<Props> = ({ store }) => {
  const { initializeStores } = useStore();

  useEffect(() => {
    initializeStores(store);
  }, [initializeStores, store]);

  return (
    <Fragment>
      <div className="w-full ">
        <Header />
        <UnivCategory />
        {/*<MapSection />*/}
        <main className="flex-1 pt-28 top-28 h-screen pt-[1px] overflow-auto  ">
          <ListSection />
        </main>
        <BottomNav />
      </div>
    </Fragment>
  );
};

export default UnivList;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  if (!context.params) return null;
  const category = context.params.id;
  console.log(category);
  try {
    const client = await clientPromise;
    const db = client.db(`${process.env.DB_NAME}`);

    const stores = await db
      .collection("univ")
      .find({ kind: category })
      .toArray();
    console.log(JSON.parse(JSON.stringify(stores)));
    return {
      props: { store: JSON.parse(JSON.stringify(stores)) },
    };
  } catch (e) {
    console.error(e);
  }
}
