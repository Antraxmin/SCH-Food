import Header from "@/components/common/Header";
import { Store } from "@/types/store";
import { NextPage } from "next";
import { Fragment, useEffect } from "react";
import UnivCategory from "@/components/univ/UnivCategory";
import UnivBottomNav from "@/components/univ/UnivBottomNav";
import SrcListSection from "@/components/univ/src/SrcListSection";
import StaffListSection from "@/components/univ/staff/StaffListSection";

interface Props {
  stores: Store[];
}

const StaffMenu: NextPage<Props> = () => {
  return (
    <Fragment>
      <div className="w-full ">
        <Header />
        <UnivCategory />
        {/*<MapSection />*/}
        <main className="flex-1 pt-28 top-28 h-screen pt-[1px] overflow-auto  ">
          <StaffListSection />
        </main>
        <UnivBottomNav />
      </div>
    </Fragment>
  );
};

export default StaffMenu;
