import Image from "next/image";
import type { Store } from "../../types/store";
import DetailCarousel from "./DetailCarousel";
import DetailHeader from "./DetailHeader";

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
          <div>
            <h2 className="text-center">{currentStore.name}</h2>
          </div>
          <hr />
          <div className="text-center">
            <h2>기본 정보</h2>
            <div className="address">
              <span>{currentStore.address || "정보가 없습니다."}</span>
            </div>
            <div className="phone">
              <span>{currentStore.phone || "정보가 없습니다."}</span>
            </div>
          </div>
          <hr />
          <div className="">
            <h2 className="text-center mb-4">MENU</h2>
            <ul>
              {currentStore.menus?.map((menu) => (
                <li
                  key={menu.name}
                  className="flex justify-between mx-4 mt-1 text-sm"
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
