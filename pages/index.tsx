import Card from "@/components/common/Card";
import Category from "@/components/common/Category";
import Header from "@/components/common/Header";
import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <Header />
      <Category />
      <main className="flex-1 mt-28 h-screen">
        <Card />
        <Card />
        <Card />
        <Card />
      </main>
    </Fragment>
  );
}
