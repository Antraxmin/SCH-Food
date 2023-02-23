import Category from "@/components/common/Category";
import Header from "@/components/common/Header";
import ListSection from "@/components/List/ListSection";
import MapSection from "@/components/map/MapSection";
import useStore from "@/hooks/useStore";
import clientPromise from "@/lib/mongodb";
import { Store } from "@/types/store";
import { GetServerSidePropsContext, NextPage } from "next";
import { Fragment, useEffect } from "react";

interface Props {
  stores: Store[];
}

const Grilled: NextPage<Props> = ({ stores }) => {
  const { initializeStores } = useStore();

  useEffect(() => {
    initializeStores(stores);
  }, [initializeStores, stores]);

  return (
    <Fragment>
      <div className="w-full ">
        <Header />
        <Category />
        <MapSection />
        <div className="top-[320px] h-2 z-32 fixed bg-gray-200 w-[448px]" />
        <main className="flex-1 pt-28 top-80 h-screen pt-[1px] overflow-auto  ">
          <ListSection />
        </main>
      </div>
    </Fragment>
  );
};

export default Grilled;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  try {
    const client = await clientPromise;
    const db = client.db(`${process.env.DB_NAME}`);

    const stores = await db
      .collection("store")
      .find({ kind: "고기" })
      .toArray();
    return {
      props: { stores: JSON.parse(JSON.stringify(stores)) },
    };
  } catch (e) {
    console.error(e);
  }
}
