import { QueryClientProvider } from "@tanstack/react-query";
import { App as AntdApp, ConfigProvider as AntdConfig } from "antd";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "~/global/global.css";
import { antdConfig, queryClient } from "~/global/libraries.config.ts";
import routes from "./global/routes.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AntdApp>
        <AntdConfig {...antdConfig}>
          <RouterProvider router={createBrowserRouter(routes)} />
        </AntdConfig>
      </AntdApp>
    </QueryClientProvider>
  </React.StrictMode>,
);
