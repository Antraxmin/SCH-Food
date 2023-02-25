import { useRouter } from "next/router";

export default function BottomNav() {
  const router = useRouter();
  return (
    <div>
      <div className="btm-nav max-w-md m-auto btm-nav-2xl h-14 shadow-md text-md">
        <button
          className="hover:bg-gray-100 text-md"
          onClick={() => {
            router.push("/");
          }}
        >
          <span className="btm-nav-label">후 문</span>
        </button>
        <button
          className=" hover:bg-gray-100"
          onClick={() => {
            router.push(`/category/${"학식"}`);
          }}
        >
          <span className="btm-nav-label">학 식</span>
        </button>
      </div>
    </div>
  );
}
