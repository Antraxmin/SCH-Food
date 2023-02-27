import { STORE_KEY } from "@/hooks/useStore";
import { Src, Staff, Store } from "@/types/store";
import useSWR from "swr";
import useCurrentStore, { CURRENT_STORE_KEY } from "@/hooks/useCurrentStore";
import { useRouter } from "next/router";
import { SRC_KEY } from "@/hooks/useSrc";
import staff from "@/pages/univ/category/staff";
import { STAFF_KEY } from "@/hooks/useStaff";
import StaffRealTimeLunch from "./StaffRealTimeLunch";

const SrcListSection = () => {
  const { data: store } = useSWR<Staff>(STAFF_KEY);

  if (!store) return null;
  return (
    <div className=" bg-gray-200 mt-[110px] z-2 pt-2 pb-16">
      <div className="m-6">
        <h2 className="text-xl">교직원식당 식단표</h2>
        <p className="text-lg">오늘은 {store.date}</p>
      </div>
      <StaffRealTimeLunch staff={store} />
    </div>
  );
};

export default SrcListSection;
