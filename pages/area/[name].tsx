import ListSection from "@/components/List/ListSection";
import Category from "@/components/common/Category";
import Header from "@/components/common/Header";
import MapSection from "@/components/map/MapSection";
import useStore from "@/hooks/useStore";
import { Store } from "@/types/store";
import { GetServerSidePropsContext, NextPage } from "next";
import { Fragment, useEffect } from "react";
import clientPromise from "@/lib/mongodb";
import BottomNav from "@/components/common/BottomNav";

interface Props {
  store: Store[];
}

const Area: NextPage<Props> = ({ store }) => {
  //console.log(stores);
  const { initializeStores } = useStore();

  useEffect(() => {
    initializeStores(store);
  }, [initializeStores, store]);

  return (
    <Fragment>
      <div className="w-full ">
        <Header />
        {/*<MapSection />*/}
        <main className="flex-1 pt-28 top-28 h-screen pt-[1px] overflow-auto  ">
          <ListSection />
        </main>
        <BottomNav />
      </div>
    </Fragment>
  );
};

export default Area;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  if (!context.params) return null;
  const name = context.params.name;
  console.log(name);
  try {
    const client = await clientPromise;
    const db = client.db(`${process.env.DB_NAME}`);

    const stores = await db.collection(`${name}`).find({}).toArray();
    console.log(JSON.parse(JSON.stringify(stores)));
    return {
      props: { store: JSON.parse(JSON.stringify(stores)) },
    };
  } catch (e) {
    console.error(e);
  }
}
