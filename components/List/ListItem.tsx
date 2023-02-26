import { Store } from "@/types/store";
import Link from "next/link";

const ListItem = ({
  name,
  description,
  topimg,
  address,
  kind,
  onClick,
}: Store) => {
  return (
    <div>
      <Link href={`/${name}`}>
        <li className=" py-3 mx-2 flex  items-center bg-white mt-1 mb-3 p-2 hover:bg-gray-100 rounded-xl cursor-pointer transition h-28 pr-4 shadow-md mx-3 shadow-gray-300 ">
          <div className="img ml-2  h-full">
            <img
              className="w-28 min-w-[110px] h-full rounded-xl"
              src={topimg}
              alt={""}
              width={50}
              height={50}
            />
          </div>
          <div className="title flex flex-col pl-5 ">
            <span className="text-md text-black">{name}</span>
            <span className="text-sm text-gray-400 truncate w-60 mt-3">
              {description}
            </span>
          </div>
        </li>
      </Link>
    </div>
  );
};

export default ListItem;
