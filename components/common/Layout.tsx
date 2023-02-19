import Header from "./Header";
import Footer from "./Footer";

type Props = {
  children: React.ReactNode;
};

function Layout({ children }: Props) {
  return (
    <div className="container mx-auto flex flex-col">
      <Header />
      <main className="flex-1 max-w-md">{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
