import CardSection from "@/components/card/CardSection";
import Category from "@/components/common/Category";
import Header from "@/components/common/Header";
import MapSection from "@/components/map/MapSection";
import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <Header />
      <Category />
      <main className="flex-1 mt-28 h-screen">
        <div className="w-full h-2/6">
          <MapSection />
        </div>
        <div className="w-full h-4/6">
          <CardSection />
        </div>
      </main>
    </Fragment>
  );
}

export async function getStaticProps() {
  const stores = (await import('../public/data.json')).default;
  return {
    props: { stores}
  }
}