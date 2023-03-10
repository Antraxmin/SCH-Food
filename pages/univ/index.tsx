import Header from "@/components/common/Header";
import useStore from "@/hooks/useStore";
import { Store } from "@/types/store";
import { NextPage } from "next";
import { Fragment, useEffect } from "react";
import clientPromise from "@/lib/mongodb";
import UnivCategory from "@/components/univ/UnivCategory";
import UnivListSection from "@/components/univ/UnivListSection";
import UnivBottomNav from "@/components/univ/UnivBottomNav";

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
        <UnivCategory />
        {/*<MapSection />*/}
        <main className="flex-1 pt-28 top-28 h-screen pt-[1px] overflow-auto  ">
          <UnivListSection />
        </main>
        <UnivBottomNav />
      </div>
    </Fragment>
  );
};

export default Home;

export async function getServerSideProps() {
  try {
    const client = await clientPromise;
    const db = client.db(`${process.env.DB_NAME}`);

    const stores = await db.collection("univ").find({}).toArray();
    return {
      props: { stores: JSON.parse(JSON.stringify(stores)) },
    };
  } catch (e) {
    console.error(e);
  }
}
