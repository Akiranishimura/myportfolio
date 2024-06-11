import { Outlet } from "react-router-dom";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

export default function LayoutDefault() {
  return (
    <>
      <Header />
      <div className="flex w-full justify-center px-4">
        <div className="w-full max-w-[1200px] h-screen">
          <Outlet />
        </div>
      </div>
      <Footer />
    </>
  );
}
