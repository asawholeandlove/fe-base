import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <div className="flex h-screen items-center justify-center bg-gray-700">
      <div className="border-gray w-full max-w-md rounded-lg border bg-white p-8 shadow-lg">
        <Outlet />
      </div>
    </div>
  );
}
