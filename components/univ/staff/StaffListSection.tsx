import { STORE_KEY } from "@/hooks/useStore";
import { Store } from "@/types/store";
import useSWR from "swr";
import useCurrentStore, { CURRENT_STORE_KEY } from "@/hooks/useCurrentStore";
import { useRouter } from "next/router";
import StaffRealTimeLunch from "./StaffRealTimeLunch";

const StaffListSection = () => {
  return (
    <div className=" bg-gray-200 mt-[110px] z-2 pt-2 pb-16">
      <div className="m-6">
        <h2 className="text-xl">교직원식당 식단표</h2>
        <p className="text-lg">오늘은 n월 n일</p>
      </div>
      <StaffRealTimeLunch />
    </div>
  );
};

export default StaffListSection;
