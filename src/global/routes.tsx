import { RouteObject } from "react-router-dom";
import LoginPage from "~/pages/login";
import DashboardLayout from "./layouts/dashboard";
import AuthGuard from "~/components/auth/AuthGuard";
import AuthLayout from "./layouts/auth";
import RegisterPage from "~/pages/register";

export type Route = RouteObject & {
  something?: string;
};

const routes: Route[] = [
  // Public routes
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "register",
        element: <RegisterPage />,
      },
    ],
  },
  // Protected routes
  {
    path: "/",
    element: (
      <AuthGuard>
        <DashboardLayout />
      </AuthGuard>
    ),
    children: [
      {
        index: true,
        element: <div>Dashboard</div>,
      },
    ],
  },
];

export default routes;
