import Header from "@/components/common/Header";
import { Staff } from "@/types/store";
import { NextPage } from "next";
import { Fragment, useEffect } from "react";
import UnivCategory from "@/components/univ/UnivCategory";
import UnivBottomNav from "@/components/univ/UnivBottomNav";
import StaffListSection from "@/components/univ/staff/StaffListSection";
import useStaff from "@/hooks/useStaff";
import clientPromise from "@/lib/mongodb";

interface Props {
  store: Staff[];
}

const StaffMenu: NextPage<Props> = ({ store }: Props) => {
  const { initializeStaff } = useStaff();

  useEffect(() => {
    initializeStaff(store[0]);
  }, [initializeStaff, store[0]]);

  return (
    <Fragment>
      <div className="w-full ">
        <Header />
        <UnivCategory />
        <main className="flex-1 pt-28 top-28 h-screen pt-[1px] overflow-auto  ">
          <StaffListSection />
        </main>
        <UnivBottomNav />
      </div>
    </Fragment>
  );
};

export default StaffMenu;

export async function getServerSideProps() {
  try {
    const client = await clientPromise;
    const db = client.db(`${process.env.DB_NAME}`);

    const stores = await db.collection("staff").find({}).toArray();
    return {
      props: { store: JSON.parse(JSON.stringify(stores)) },
    };
  } catch (e) {
    console.error(e);
  }
}
