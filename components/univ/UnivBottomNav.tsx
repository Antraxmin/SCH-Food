import { useRouter } from "next/router";

export default function UnivBottomNav() {
  const router = useRouter();
  return (
    <div>
      <div className="max-w-md m-auto shadow-md btm-nav btm-nav-2xl h-14 text-md">
        <button
          className="hover:bg-gray-100 text-md"
          onClick={() => {
            router.push("/");
          }}
        >
          <span className="btm-nav-label">후 문</span>
        </button>
        <button
          className="active hover:bg-gray-100"
          onClick={() => {
            router.push("/univ");
          }}
        >
          <span className="btm-nav-label">학 식</span>
        </button>
      </div>
    </div>
  );
}
