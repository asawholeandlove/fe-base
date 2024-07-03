import { RouteObject } from "react-router-dom";
import LoginPage from "~/pages/login";
import DashboardLayout from "./layouts/dashboard";
import AuthGuard from "~/components/auth/AuthGuard";

export type Route = RouteObject & {
  something?: string;
};

const routes: Route[] = [
  // Public routes
  {
    path: "/login",
    element: <LoginPage />,
  },
  // Protected routes
  {
    path: "/",
    element: (
      <AuthGuard>
        <DashboardLayout />
      </AuthGuard>
    ),
  },
];

export default routes;
