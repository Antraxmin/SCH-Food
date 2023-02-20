import { Store } from "@/types/store";
import { NextPage } from "next";

interface Props {
  store: Store;
}

const StoreDetail: NextPage<Props> = ({ store: Store }) => {
  return <div>식당 상세 정보 페이지입니다.</div>;
};
