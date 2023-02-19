import Image from "next/image";

export default function Card() {
  return (
    <div className="w-full flex justify-center mx-auto">
      <div className="card card-side bg-base-100 mt-4 shadow-[5px_10px_15px_-5px_rgba(0,0,0,0.2)] h-24 w-5/6">
        <figure className="m-2">
          <Image
            src="/image/image.jpg"
            alt="Movie"
            width={50}
            height={50}
            className="w-full h-full rounded-r-2xl"
          />
        </figure>
        <div className="card-body p-2 flex flex-col">
          <h2 className="card-title text-sm">식당이름</h2>
          <p className="text-xs">주소</p>
          <p className="text-xs">한줄소개</p>
        </div>
      </div>
    </div>
  );
}
