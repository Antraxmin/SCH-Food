import { STORE_KEY } from "@/hooks/useStore";
import { Store } from "@/types/store";
import useSWR from "swr";
import useCurrentStore, { CURRENT_STORE_KEY } from "@/hooks/useCurrentStore";
import { useRouter } from "next/router";
import SrcRealTimeBreak from "./SrcRealTimeBreak";
import SrcRealTimeDinner from "./SrcRealTimeDinner";
import SrcRealTimeLunch from "./SrcRealTimeLunch";

const SrcListSection = () => {
  return (
    <div className=" bg-gray-200 mt-[110px] z-2 pt-2 pb-16">
      <div className="m-6">
        <h2 className="text-xl">향설생활관1 식단표</h2>
        <p className="text-lg">오늘은 n월 n일</p>
      </div>
      <SrcRealTimeBreak />
      <SrcRealTimeLunch />
      <SrcRealTimeDinner />
    </div>
  );
};

export default SrcListSection;
