import { Store } from "@/types/store";
import { addListener } from "process";
import Image from "next/image";

const ListItem = ({
  name,
  description,
  topimg,
  address,
  kind,
  onClick,
}: Store) => {
  return (
    <div onClick={onClick}>
      <li className=" py-3 mx-2 flex justify-between items-center bg-white mt-2 p-2 hover:shadow-lg rounded cursor-pointer transition h-24 pr-4">
        <div className="flex ml-1 w-4/5 h-full">
          <div className="w-32 rounded-md">
            <img
              className="w-full h-full rounded-md"
              src={topimg}
              alt={""}
              width={50}
              height={50}
            />
          </div>

          <div className="flex flex-col ml-4 w-full">
            <span className="font-medium text-black">{name}</span>
            <span className="text-sm text-gray-400 truncate w-60">
              {description}
            </span>
            <span className="text-sm text-gray-400 truncate w-60 mt-1">
              {address}
            </span>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-gray-300">{kind}</span>
          <i className="fa fa-star text-green-400"></i>
        </div>
      </li>
    </div>
  );
};

export default ListItem;
