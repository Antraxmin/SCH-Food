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
        <li className=" py-3 mx-2 flex justify-between items-center bg-white mt-1 mb-3 p-2 hover:bg-gray-100 rounded-xl cursor-pointer transition h-28 pr-4 shadow-md mx-3 shadow-gray-300 ">
          <div className="img ml-2  h-full">
            <img
              className="w-28 h-full rounded-xl"
              src={topimg}
              alt={""}
              width={50}
              height={50}
            />
          </div>
          <div className="title flex flex-col pl-4 ">
            <span className="text-xl text-black">{name}</span>
            <span className="text-sm text-gray-400 truncate w-60 mt-3">
              {description}
            </span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-gray-400">{kind}</span>
            <i className="fa fa-star text-green-400"></i>
          </div>
        </li>
      </Link>
    </div>
  );
};

export default ListItem;
