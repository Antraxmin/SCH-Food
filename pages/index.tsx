import ListSection from "@/components/List/ListSection";
import Category from "@/components/common/Category";
import Header from "@/components/common/Header";
import MapSection from "@/components/map/MapSection";
import useStore from "@/hooks/useStore";
import { Store } from "@/types/store";
import { NextPage } from "next";
import { Fragment, useEffect } from "react";
import clientPromise from "@/lib/mongodb";

interface Props {
  stores: Store[];
}

const Home: NextPage<Props> = ({ stores }) => {
  //console.log(stores);
  const { initializeStores } = useStore();

  useEffect(() => {
    initializeStores(stores);
  }, [initializeStores, stores]);

  return (
    <Fragment>
      <div className="w-full ">
        <Header />
        <Category />
        {/*<MapSection />*/}
        <main className="flex-1 pt-28 top-28 h-screen pt-[1px] overflow-auto  ">
          <ListSection />
        </main>
      </div>
    </Fragment>
  );
};

export default Home;
/*
export async function getStaticProps() {
  const stores = await (
    await import(`${process.env.NEXT_PUBLIC_DB_URL}`)
  ).default;

  return {
    props: { stores },
  };
}*/

export async function getServerSideProps() {
  try {
    const client = await clientPromise;
    const db = client.db(`${process.env.DB_NAME}`);

    const stores = await db.collection("store").find({}).toArray();
    return {
      props: { stores: JSON.parse(JSON.stringify(stores)) },
    };
  } catch (e) {
    console.error(e);
  }
}
