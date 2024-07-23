import { FC } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Layout: FC = () => {
  return (
    // <div className="container flex min-h-screen bg-slate-900  text-white pd-20 w-auto font-sans">
    <div className="flex min-h-screen  flex-col bg-slate-900 pb-20 font-sans text-white">
      <Header></Header>
      {/* <div className="max-w-[1000px]"> */}
      <Outlet />
      {/* </div> */}
      {/* <Footer></Footer> */}
    </div>
  );
};

export default Layout;
