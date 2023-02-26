import { Store } from "@/types/store";
import Link from "next/link";

const UnivListItem = ({
  name,
  description,
  topimg,
  address,
  kind,
  onClick,
}: Store) => {
  return (
    <div onClick={onClick}>
      <li className="flex items-center p-2 py-3 pr-4 mx-2 mx-3 mt-1 mb-3 transition bg-white shadow-md cursor-pointer hover:bg-gray-100 rounded-xl h-28 shadow-gray-300">
        <div className="h-full ml-2 img">
          <img
            className="w-28 min-w-[110px] h-full rounded-xl"
            src={topimg}
            alt={""}
            width={50}
            height={50}
          />
        </div>
        <div className="flex flex-col pl-5 title ">
          <span className="text-black text-md">{name}</span>
          <span className="mt-3 text-sm text-gray-400 truncate w-60">
            {description}
          </span>
        </div>
      </li>
    </div>
  );
};

export default UnivListItem;
