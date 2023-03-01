import BottomNav from "@/components/common/BottomNav";
import Category from "@/components/common/Category";
import Header from "@/components/common/Header";
import ListSection from "@/components/List/ListSection";
import useStore from "@/hooks/useStore";
import clientPromise from "@/lib/mongodb";
import { Store } from "@/types/store";
import { GetServerSidePropsContext, NextPage } from "next";
import { Fragment, useEffect } from "react";

interface Props {
  store: Store[];
}

const AllStore: NextPage<Props> = ({ store }) => {
  const { initializeStores } = useStore();

  useEffect(() => {
    initializeStores(store);
  }, [initializeStores, store]);

  return (
    <Fragment>
      <div className="w-full ">
        <Header />
        <Category />
        <main className="flex-1 pt-28 top-28 h-screen pt-[1px] overflow-auto  ">
          <ListSection />
        </main>
        <BottomNav />
      </div>
    </Fragment>
  );
};

export default AllStore;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  try {
    const client = await clientPromise;
    const db = client.db(`${process.env.DB_NAME}`);

    const stores = await db.collection("store").find({}).toArray();
    console.log(JSON.parse(JSON.stringify(stores)));
    return {
      props: { store: JSON.parse(JSON.stringify(stores)) },
    };
  } catch (e) {
    console.error(e);
  }
}
