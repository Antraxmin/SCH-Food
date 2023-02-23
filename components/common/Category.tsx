import useSWR from "swr";
import { useRouter } from "next/router";
import useCurrentCategory, { CURRENT_CATEGORY_KEY } from "@/hooks/useCategory";
import Link from "next/link";

export default function Category() {
  const { data: currentCategory } = useSWR<string>(CURRENT_CATEGORY_KEY);
  const { setCurrentCategory } = useCurrentCategory();

  const router = useRouter();

  return (
    <div className="w-full justify-center bg-white mt-12 fixed top-4 z-30 max-w-md overflow-auto">
      <ul className="menu menu-horizontal bg-base-100">
        <li>
          <Link href={{ pathname: "/category/korean" }}>한식</Link>
        </li>
        <li>
          <Link href={{ pathname: "/category/japanese" }}>일식/돈가스</Link>
        </li>
        <li>
          <Link href={{ pathname: "/category/chinese" }}>중화요리</Link>
        </li>
        <li>
          <Link href={{ pathname: "/category/snackbar" }}>분식</Link>
        </li>
        <li>
          <Link href={{ pathname: "/category/american" }}>양식</Link>
        </li>
        <li>
          <Link href={{ pathname: "/category/grilled" }}>고기/구이</Link>
        </li>
        <li>
          <Link href={{ pathname: "/category/pub" }}>포차/주점</Link>
        </li>
        <li>
          <Link href={{ pathname: "/category/cafe" }}>카페/디저트</Link>
        </li>
      </ul>
    </div>
  );
}
