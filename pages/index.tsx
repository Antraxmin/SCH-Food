import ListSection from "@/components/List/ListSection";
import Category from "@/components/common/Category";
import Header from "@/components/common/Header";
import MapSection from "@/components/map/MapSection";
import useStore from "@/hooks/useStore";
import { Store } from "@/types/store";
import { NextPage } from "next";
import { Fragment, useEffect } from "react";

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
        <MapSection />
        <div className="top-[320px] h-2 z-32 fixed bg-gray-200 w-[448px]" />
        <main className="flex-1 pt-28 top-80 h-screen pt-[1px] overflow-auto  ">
          <ListSection />
        </main>
      </div>
    </Fragment>
  );
};

export default Home;

export async function getStaticProps() {
  const stores = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/stores`
  ).then((response) => response.json());

  return {
    props: { stores },
  };
}
