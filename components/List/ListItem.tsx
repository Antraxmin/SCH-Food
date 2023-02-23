import { Store } from "@/types/store";

const ListItem = ({ name, description, address, kind }: Store) => {
  return (
    <div>
      <li className=" py-3 mx-2 flex justify-between items-center bg-white mt-2 p-2 hover:shadow-lg rounded cursor-pointer transition h-24 pr-4">
        <div className="flex ml-1 w-4/5 h-full">
          <img
            className="w-1/4 rounded-full"
            src="./images/none.png"
            width="40"
            height="40"
          />
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
