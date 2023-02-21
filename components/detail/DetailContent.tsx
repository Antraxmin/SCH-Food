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
  );
};

export default DetailContent;
