import CardSection from "@/components/card/CardSection";
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
      <main className="flex-1 pt-[340px] h-screen pt-[1px] overflow-auto">
        <div className="w-full">
          <Header />
          <Category />
          <MapSection />
        </div>
        <div>
          <CardSection />
        </div>
      </main>
    </Fragment>
  );
};

export default Home;

export async function getStaticProps() {
  const stores = (await import("../public/data.json")).default;
  return {
    props: { stores },
  };
}
