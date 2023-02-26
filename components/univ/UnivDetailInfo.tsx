import { Store } from "@/types/store";
import { AiOutlineShareAlt } from "react-icons/ai";
import { IoLocationOutline } from "react-icons/io5";
import copy from "copy-to-clipboard";

type Props = {
  currentStore?: Store;
};

const UnivDetailInfo = ({ currentStore }: Props) => {
  if (!currentStore) return null;
  return (
    <div className="w-full bg-white rounded-b-lg shadow-md card ">
      <div className="gap-1 px-6 py-6 pb-4 card-body">
        <h2 className="mb-2 card-title">{currentStore.name}</h2>
        <div className="flex float-left">
          <div className="w-16 text-sm">영업시간</div>
          <div className="ml-2 text-sm text-blue-800 ">{currentStore.hour}</div>
        </div>
        <div className="flex float-left">
          <div className="w-16 text-sm">주소</div>
          <div className="ml-2 text-sm text-blue-800 ">
            {currentStore.address}
          </div>
        </div>
        <div className="flex float-left">
          <div className="w-16 text-sm">연락처</div>
          <div className="ml-2 text-sm text-blue-800 ">
            {currentStore.phone}
          </div>
        </div>
        <div className="justify-end card-actions">
          <label
            htmlFor="map-modal"
            className="shadow-md btn btn-ghost btn-circle shadow-gray-300"
          >
            <IoLocationOutline size={20} color="#444444" />
          </label>
          <input type="checkbox" id="map-modal" className="modal-toggle" />
          <div className="modal">
            <div className="relative m-auto modal-box w-80">
              <label
                htmlFor="map-modal"
                className="absolute btn btn-sm btn-circle right-2 top-2"
              >
                ✕
              </label>
              <h3 className="text-lg font-bold">
                지도 기능은 현재 개발중이에요!
              </h3>
              <p className="py-4">빠른 시일 내 제공하겠습니다 🔥</p>
            </div>
          </div>
          <label className="shadow-md btn btn-ghost btn-circle shadow-gray-300">
            <button
              className=""
              onClick={() => {
                copy(location.origin + "/univ/" + currentStore.name);
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

export default UnivDetailInfo;
