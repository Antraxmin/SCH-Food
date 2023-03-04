import useSWR from "swr";
import { useRouter } from "next/router";
import useCurrentCategory, { CURRENT_CATEGORY_KEY } from "@/hooks/useCategory";
import Link from "next/link";
import "styles/layout.module.css";

export default function UnivCategory() {
  const { data: currentCategory } = useSWR<string>(CURRENT_CATEGORY_KEY);
  const { setCurrentCategory } = useCurrentCategory();

  const router = useRouter();

  return (
    <div className="univmenubox w-full justify-center bg-white mt-12 fixed top-4 z-30 max-w-md overflow-auto">
      <ul className="bg-white menu menu-horizontal">
        <li className="px-0">
          <Link href={"/univ/category/src"}>향설1관</Link>
        </li>
        <li>
          <Link href={`/univ/category/${"향2"}`}>향설2관</Link>
        </li>
        <li>
          <Link href={`/univ/category/${"학생회관"}`}>학생회관</Link>
        </li>
        <li>
          <Link href={"/univ/category/staff"}>교직원식당</Link>
        </li>
        <li>
          <Link href={`/univ/category/${"교내카페"}`}>교내카페</Link>
        </li>
      </ul>
    </div>
  );
}
