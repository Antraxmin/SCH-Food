import Header from "@/components/common/Header";
import { Src, Store } from "@/types/store";
import { NextPage } from "next";
import { Fragment, useEffect } from "react";
import UnivCategory from "@/components/univ/UnivCategory";
import UnivBottomNav from "@/components/univ/UnivBottomNav";
import SrcListSection from "@/components/univ/src/SrcListSection";
import clientPromise from "@/lib/mongodb";
import useStore from "@/hooks/useStore";
import useSrc from "@/hooks/useSrc";

interface Props {
  store: Src[];
}

const SrcMenu: NextPage<Props> = ({ store }: Props) => {
  const { initializeSrc } = useSrc();

  useEffect(() => {
    initializeSrc(store[0]);
  }, [initializeSrc, store[0]]);

  return (
    <Fragment>
      <div className="w-full ">
        <Header />
        <UnivCategory />
        <main className="flex-1 pt-28 top-28 h-screen pt-[1px] overflow-auto  ">
          <SrcListSection />
        </main>
        <UnivBottomNav />
      </div>
    </Fragment>
  );
};

export default SrcMenu;

export async function getServerSideProps() {
  try {
    const client = await clientPromise;
    const db = client.db(`${process.env.DB_NAME}`);

    const stores = await db.collection("src").find({}).toArray();
    return {
      props: { store: JSON.parse(JSON.stringify(stores)) },
    };
  } catch (e) {
    console.error(e);
  }
}
