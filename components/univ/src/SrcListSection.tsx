import { STORE_KEY } from "@/hooks/useStore";
import { Src, Store } from "@/types/store";
import useSWR from "swr";
import useCurrentStore, { CURRENT_STORE_KEY } from "@/hooks/useCurrentStore";
import { useRouter } from "next/router";
import SrcRealTimeBreak from "./SrcRealTimeBreak";
import SrcRealTimeDinner from "./SrcRealTimeDinner";
import SrcRealTimeLunch from "./SrcRealTimeLunch";
import { SRC_KEY } from "@/hooks/useSrc";

const SrcListSection = () => {
  const { data: store } = useSWR<Src>(SRC_KEY);
  const { data: currentStore } = useSWR<Store>(CURRENT_STORE_KEY);
  const { setCurrentStore, clearCurrentStore } = useCurrentStore();

  const router = useRouter();

  if (!store) return null;
  return (
    <div className=" bg-gray-200 mt-[110px] z-2 pt-2 pb-16">
      <div className="m-6">
        <h2 className="text-xl">향설생활관1 식단표</h2>
        <p className="text-lg">오늘은 {store.date}</p>
      </div>
      <SrcRealTimeBreak src={store} />
      <SrcRealTimeLunch src={store} />
      <SrcRealTimeDinner src={store} />
    </div>
  );
};

export default SrcListSection;
