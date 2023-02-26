import UnivDetailCarousel from "@/components/univ/UnivDetailCarousel";
import UnivDetailHeader from "@/components/univ/UnivDetailHeader";
import UnivDetailInfo from "@/components/univ/UnivDetailInfo";
import useClicked from "@/hooks/useClicked";
import clientPromise from "@/lib/mongodb";
import type { Store } from "@/types/store";
import { GetServerSidePropsContext, NextPage } from "next";
import { useEffect } from "react";

interface Props {
  store: Store[];
}

const UnivDetail: NextPage<Props> = ({ store }) => {
  const { initializeClicked } = useClicked();

  useEffect(() => {
    initializeClicked(store);
  }, [initializeClicked, store]);
  return (
    <div className="bg-gray-100">
      <UnivDetailHeader currentStore={store[0]} />
      <div className="h-60">
        <UnivDetailCarousel currentStore={store[0]} />
      </div>
      <>
        <UnivDetailInfo currentStore={store[0]} />
        <br />
        <hr />
        <div className="pb-10">
          <h2 className="mb-4 text-lg text-center">MENU</h2>
          {store[0] === undefined ? null : (
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
          )}
        </div>
      </>
    </div>
  );
};

export default UnivDetail;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  if (!context.params) return null;
  const names = context.params.name;
  console.log(names);
  try {
    const client = await clientPromise;
    const db = client.db(`${process.env.DB_NAME}`);

    const stores = await db.collection("univ").find({ name: names }).toArray();
    console.log(JSON.parse(JSON.stringify(stores)));
    return {
      props: { store: JSON.parse(JSON.stringify(stores)) },
    };
  } catch (e) {
    console.error(e);
  }
}
