import { RefetchAll } from "~/components/tools/RefetchAll";
import Header from "./Header/Header";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar/Sidebar";

export default function DashboardLayout() {
  return (
    <>
      <RefetchAll />
      <div>
        <Header />
        <Sidebar />
        {/* Content */}
        <div
          className="ml-[260px] mt-[65px] flex flex-col rounded-lg bg-gray-50 p-5"
          style={{ minHeight: "calc(100vh - 65px)" }}
        >
          <Outlet />
        </div>
      </div>
    </>
  );
}
