import { Navigate, RouteObject } from "react-router-dom";
import LoginPage from "~/pages/login";
import DashboardLayout from "./layouts/dashboard";
import AuthGuard from "~/components/auth/AuthGuard";
import AuthLayout from "./layouts/auth";
import RegisterPage from "~/pages/register";
import FormList from "~/pages/form";
import FormModify from "~/pages/form/FormModify";

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
        element: <Navigate to="/form" />,
      },
      {
        path: "form",
        children: [
          {
            index: true,
            element: <FormList />,
          },
          {
            path: "add",
            element: <FormModify />,
          },
          {
            path: "edit/:id",
            element: <FormModify />,
          },
        ],
      },
      {
        path: "config",
        element: <div>Config page</div>,
      },
    ],
  },
];

export default routes;
