import useSWR from "swr";
import { useRouter } from "next/router";
import useCurrentCategory, { CURRENT_CATEGORY_KEY } from "@/hooks/useCategory";
import Link from "next/link";
import "styles/layout.module.css";

export default function Category() {
  const { data: currentCategory } = useSWR<string>(CURRENT_CATEGORY_KEY);
  const { setCurrentCategory } = useCurrentCategory();

  const router = useRouter();

  return (
    <div className="menubox w-full justify-center bg-white mt-12 fixed top-4 z-30 max-w-md overflow-auto">
      <ul className="menu menu-horizontal bg-white">
        <li>
          <Link href={`/category/${"한식"}`}>한식</Link>
        </li>
        <li>
          <Link href={`/category/${"일식"}`}>일식/돈가스</Link>
        </li>
        <li>
          <Link href={`/category/${"중식"}`}>중화요리</Link>
        </li>
        <li>
          <Link href={`/category/${"분식"}`}>분식</Link>
        </li>
        <li>
          <Link href={`/category/${"양식"}`}>양식</Link>
        </li>
        <li>
          <Link href={`/category/${"고기"}`}>고기/구이</Link>
        </li>
        <li>
          <Link href={`/category/${"포차"}`}>포차/주점</Link>
        </li>
        <li>
          <Link href={`/category/${"카페"}`}>카페/디저트</Link>
        </li>
      </ul>
    </div>
  );
}
