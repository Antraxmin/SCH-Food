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
    <div className="fixed z-30 flex justify-center w-full max-w-md mt-12 overflow-auto bg-white menubox top-4">
      <ul className="bg-white menu menu-horizontal">
        <li>
          <Link href={`/univ/category/${"향1"}`}>향설1관</Link>
        </li>
        <li>
          <Link href={`/univ/category/${"향2"}`}>향설2관</Link>
        </li>
        <li>
          <Link href={`/univ/category/${"학생회관"}`}>학생회관</Link>
        </li>
        <li>
          <Link href={`/univ/category/${"교직원"}`}>교직원식당</Link>
        </li>
      </ul>
    </div>
  );
}
