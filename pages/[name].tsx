import Category from "@/components/common/Category";
import Header from "@/components/common/Header";
import DetailCarousel from "@/components/detail/DetailCarousel";
import DetailHeader from "@/components/detail/DetailHeader";
import DetailInfo from "@/components/detail/DetailInfo";
import DetailPage from "@/components/detail/DetailPage";
import ListSection from "@/components/List/ListSection";
import MapSection from "@/components/map/MapSection";
import useClicked from "@/hooks/useClicked";
import useCurrentStore from "@/hooks/useCurrentStore";
import useStore from "@/hooks/useStore";
import clientPromise from "@/lib/mongodb";
import type { Store } from "@/types/store";
import {
  GetServerSidePropsContext,
  GetStaticPaths,
  GetStaticProps,
  NextPage,
} from "next";
import { useRouter } from "next/router";
import { Fragment, useEffect } from "react";

interface Props {
  store: Store[];
}

const StoreDetail: NextPage<Props> = ({ store }) => {
  const { initializeClicked } = useClicked();

  useEffect(() => {
    initializeClicked(store);
  }, [initializeClicked, store]);
  return (
    <div className="bg-white">
      <DetailHeader currentStore={store[0]} />
      <div className="h-60">
        <DetailCarousel currentStore={store[0]} />
      </div>
      <>
        <DetailInfo currentStore={store[0]} />
        <br />
        <hr />
        <div className="">
          <h2 className="text-center mb-4">MENU</h2>
          <ul>
            {store[0].menus?.map((menu) => (
              <li
                key={menu.name}
                className="flex justify-between mx-6 mt-1 text-sm"
              >
                <span>{menu.name}</span>
                <span>{menu.price}</span>
              </li>
            ))}
          </ul>
        </div>
      </>
    </div>
  );
};

export default StoreDetail;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  if (!context.params) return null;
  const names = context.params.name;
  console.log(names);
  try {
    const client = await clientPromise;
    const db = client.db(`${process.env.DB_NAME}`);

    const stores = await db.collection("store").find({ name: names }).toArray();
    console.log(JSON.parse(JSON.stringify(stores)));
    return {
      props: { store: JSON.parse(JSON.stringify(stores)) },
    };
  } catch (e) {
    console.error(e);
  }
}
