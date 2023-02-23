import Image from "next/image";
import type { Store } from "../../types/store";
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
      <div className="">
        {currentStore.images.slice(0, 3).map((image) => (
          <div
            style={{ position: "relative", maxWidth: 120, height: 80 }}
            key={image}
          >
            <Image
              className="grid-3"
              src={image}
              alt=""
              fill
              style={{ objectFit: "cover" }}
              sizes="120px"
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mO0WhFsDwADzwF2mLYSJgAAAABJRU5ErkJggg=="
              priority
            />
          </div>
        ))}
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
