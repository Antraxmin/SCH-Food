import { Store } from "@/types/store";
import { AiOutlineShareAlt } from "react-icons/ai";
import copy from "copy-to-clipboard";

type Props = {
  currentStore?: Store;
};

const DetailInfo = ({ currentStore }: Props) => {
  if (!currentStore) return null;
  return (
    <div className="card w-full bg-base-100 shadow-md rounded-b-lg ">
      <div className="card-body gap-1 py-6 pb-4 px-6">
        <h2 className="card-title mb-2">{currentStore.name}</h2>
        <div className="flex float-left">
          <div className="w-16 text-sm">영업시간</div>
          <div className="text-blue-800 text-sm ml-2 ">{currentStore.hour}</div>
        </div>
        <div className="flex float-left">
          <div className="w-16 text-sm">주소</div>
          <div className="text-blue-800 text-sm ml-2 ">
            {currentStore.address}
          </div>
        </div>
        <div className="flex float-left">
          <div className="w-16 text-sm">연락처</div>
          <div className="text-blue-800 text-sm ml-2 ">
            {currentStore.phone}
          </div>
        </div>
        <div className="card-actions justify-end">
          <label className="btn btn-ghost btn-circle">
            <button
              className=""
              onClick={() => {
                copy(location.origin + "/" + currentStore.name);
              }}
              aria-label="클립보드에 복사했어요!"
            >
              <AiOutlineShareAlt size={20} color="#444444" />
            </button>
          </label>
        </div>
      </div>
    </div>
  );
};

export default DetailInfo;
