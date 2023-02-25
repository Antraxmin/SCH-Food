import type { Store } from "../../types/store";
import MapSection from "../map/MapSection";
import DetailCarousel from "./DetailCarousel";
import DetailHeader from "./DetailHeader";
import DetailInfo from "./DetailInfo";

type Props = {
  currentStore?: Store;
  expanded: boolean;
};

const DetailPage = ({ currentStore, expanded }: Props) => {
  if (!currentStore) return null;
  return (
    <div className="bg-white">
      <DetailHeader currentStore={currentStore} />
      <div className="h-60">
        <DetailCarousel currentStore={currentStore} />
      </div>
      {expanded && (
        <>
          <DetailInfo currentStore={currentStore} />
          <br />
          <hr />
          <div className="pb-10">
            <h2 className="text-center text-lg ">메뉴</h2>
            <ul className="mb-10">
              {currentStore.menus?.map((menu) => (
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
      )}
    </div>
  );
};
export default DetailPage;
