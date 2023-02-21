import DetailContent from "./DetailContent";
import DetailNav from "./DetailNav";
import useSWR from "swr";
import { CURRENT_STORE_KEY } from "@/hooks/useCurrentStore";
import type { Store } from "@/types/store";
import { useState } from "react";

const Detail = () => {
  const { data: currentStore } = useSWR<Store>(CURRENT_STORE_KEY);
  const [expanded, setExpanded] = useState(false);

  return (
    <div>
      <div className="">
        <DetailNav /> {/* 상세페이지 상단바  */}
        <DetailContent currentStore={currentStore} expanded={expanded} />{" "}
        {/* 상세페이지 정보 영역 */}
      </div>
    </div>
  );
};

export default Detail;
