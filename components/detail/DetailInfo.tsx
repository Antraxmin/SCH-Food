import { Store } from "@/types/store";
import { AiOutlineShareAlt } from "react-icons/ai";
import { IoLocationOutline } from "react-icons/io5";
import copy from "copy-to-clipboard";
import MapSection from "../map/MapSection";

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
          <label
            htmlFor="map-modal"
            className="btn btn-ghost btn-circle shadow-md shadow-gray-300"
          >
            <IoLocationOutline size={20} color="#444444" />
          </label>
          <input type="checkbox" id="map-modal" className="modal-toggle" />
          <div className="modal">
            <div className="modal-box relative w-80 m-auto">
              <label
                htmlFor="map-modal"
                className="btn btn-sm btn-circle absolute right-2 top-2"
              >
                ✕
              </label>
              <h3 className="text-lg font-bold">
                지도 기능은 현재 개발중이에요!
              </h3>
              <p className="py-4">빠른 시일 내 제공하겠습니다 🔥</p>
            </div>
          </div>
          <label className="btn btn-ghost btn-circle shadow-md shadow-gray-300">
            <button
              className=""
              onClick={() => {
                copy(location.origin + "/" + currentStore.name);
                alert("클립보드에 복사되었습니다");
              }}
              aria-label="copy to clipboard"
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
