import { Outlet } from "react-router-dom";
import Header from "../components/header";

export default function LayoutDefault() {
  return (
    <>
      <Header />
        
      <Outlet />
    </>
  );
}
