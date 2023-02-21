import Image from "next/image";
import { Store } from "@/types/store";

type Props = {
  currentStore?: Store;
  expanded: boolean;
};

const DetailContent = ({ currentStore, expanded }: Props) => {
  if (!currentStore) return null; // 현재 선택된 식당 정보가 없다면 null
  return (
    <div>
      {/* 상세페이지 이미지 영역  */}
      <div>
        {currentStore.images.slice(0, 3).map((image) => (
          <div className="relative w-32 h-20" key={image}>
            <Image
              src={image}
              alt=""
              fill
              style={{ objectFit: "cover" }}
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mO0WhFsDwADzwF2mLYSJgAAAABJRU5ErkJggg=="
            />
          </div>
        ))}
      </div>
      {/* 상세페이지 기본 정보 영역  */}
      <div className="info">
        <h2>기본 정보</h2>
        <div className="address">
          <span>{currentStore.address}</span>
        </div>
        <div className="phone">
          <span>{currentStore.phone}</span>
        </div>
        <div className="phone">
          <span>{currentStore.phone}</span>
        </div>
      </div>
      {/* 상세페이지 메뉴 영역  */}
      <div className="menu">
        <h2>메뉴</h2>
        <ul>
          {currentStore.menus?.map((menu) => (
            <li className="menu_list" key={menu.name}>
              <span className="name">{menu.name}</span>
              <span className="price">{menu.price}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DetailContent;
