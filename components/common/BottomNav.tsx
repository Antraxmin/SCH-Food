import Link from "next/link";
import { Router, useRouter } from "next/router";

export default function BottomNav() {
  const router = useRouter();
  return (
    <div>
      <div className="btm-nav max-w-md m-auto">
        <button
          className="active hover:bg-gray-100"
          onClick={() => {
            router.push("/");
          }}
        >
          <img src="./svg/home.svg" />
          <span className="btm-nav-label">후문</span>
        </button>
        <button
          className=" hover:bg-gray-100"
          onClick={() => {
            router.push(`/area/${"univ"}`);
          }}
        >
          <img src="./svg/univ.svg" />
          <span className="btm-nav-label">학식</span>
        </button>
        <button className="hover:bg-gray-100">
          <img src="./svg/park.svg" />
          <span className="btm-nav-label">신정호</span>
        </button>
      </div>
    </div>
  );
}

function change(e: { currentTarget: Element }) {
  var btns = document.querySelectorAll(".btn_bt");
  btns.forEach((btn, i) => {
    if (e.currentTarget == btn) {
      btn.classList.add("bg-gray-100");
    } else {
      btn.classList.remove("bg-gray-100");
    }
  });
  console.log(e.currentTarget);
}
