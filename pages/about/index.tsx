import Header from "@/components/common/Header";
import { useRouter } from "next/router";
import { Fragment } from "react";

export default function Home() {
  const router = useRouter();
  return (
    <Fragment>
      <Header />
      <main className="flex-1 mt-16 h-screen">
        <div className="bg-gray-200 w-10 m-auto top-8 p-5"></div>
        <div className="bg-white w-4/5 m-auto top-8 p-5">
          안녕하세요! 순천향대 맛집알리미 개발자인
          <br /> 컴퓨터소프트웨어공학과 21학번 임채민입니다.
          <br />
          <br />
          먼저 서비스를 이용해주셔서 감사하다는 말씀을 전하고 싶습니다.
          <br />
          <br />
          신창은 다른 대학가에 비해 인프라가 좋지 않은 편이지만 앞으로
          순천향대에서 몇년간 대학생활을 하게 될 신입생들, 학교 주변에서 매
          끼니를 해결해야 하는 학생들이 언제 어디서든 먹을거리에 대한 정보를
          쉽게 얻었으면 하는 마음에서 개발하였습니다.
          <br />
          <br />
          개발자 본인이 먹는 것을 굉장히 좋아하기에 지속적인 업데이트 및 빠른
          피드백을 약속드릴 수 있습니다.
          <br />
          <br /> 무엇보다 순천향대 주변 인프라가 더 활성화되기를 기원하며
          서비스를 운영해 나갈 예정입니다😀
          <br />
          <br /> 앞으로도 많은 관심과 이용 부탁드립니다!
        </div>
        <div className="bg-gray-200 w-full m-auto top-8 p-2"></div>
        <div className=" items-center flex justify-contents">
          <button
            className="btn gap-2 m-auto items-center"
            onClick={() => {
              router.push("https://github.com/Antraxmin/SCH-Food.git");
            }}
          >
            <svg
              width="20"
              height="20"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="inline-block h-5 w-5 fill-current md:h-6 md:w-6"
            >
              <path d="M256,32C132.3,32,32,134.9,32,261.7c0,101.5,64.2,187.5,153.2,217.9a17.56,17.56,0,0,0,3.8.4c8.3,0,11.5-6.1,11.5-11.4,0-5.5-.2-19.9-.3-39.1a102.4,102.4,0,0,1-22.6,2.7c-43.1,0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1,1.4-14.1h.1c22.5,2,34.3,23.8,34.3,23.8,11.2,19.6,26.2,25.1,39.6,25.1a63,63,0,0,0,25.6-6c2-14.8,7.8-24.9,14.2-30.7-49.7-5.8-102-25.5-102-113.5,0-25.1,8.7-45.6,23-61.6-2.3-5.8-10-29.2,2.2-60.8a18.64,18.64,0,0,1,5-.5c8.1,0,26.4,3.1,56.6,24.1a208.21,208.21,0,0,1,112.2,0c30.2-21,48.5-24.1,56.6-24.1a18.64,18.64,0,0,1,5,.5c12.2,31.6,4.5,55,2.2,60.8,14.3,16.1,23,36.6,23,61.6,0,88.2-52.4,107.6-102.3,113.3,8,7.1,15.2,21.1,15.2,42.5,0,30.7-.3,55.5-.3,63,0,5.4,3.1,11.5,11.4,11.5a19.35,19.35,0,0,0,4-.4C415.9,449.2,480,363.1,480,261.7,480,134.9,379.7,32,256,32Z"></path>
            </svg>
            Github
          </button>
        </div>
      </main>
    </Fragment>
  );
}
