import Header from "@/components/common/Header";
import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <Header />
      <main className="flex-1 mt-16 h-screen">소개 페이지입니다.</main>
    </Fragment>
  );
}
