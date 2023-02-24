export default function BottomNav() {
  return (
    <div>
      <div className="btm-nav max-w-md m-auto ">
        <button className="active hover:bg-gray-100">
          <img src="./svg/home.svg" />
          <span className="btm-nav-label">후문</span>
        </button>
        <button className="visited:active">
          <img src="./svg/univ.svg" />
          <span className="btm-nav-label">학식</span>
        </button>
        <button>
          <img src="./svg/park.svg" />
          <span className="btm-nav-label">신정호</span>
        </button>
      </div>
    </div>
  );
}
