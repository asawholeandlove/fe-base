import { QueryClientProvider } from "@tanstack/react-query";
import { App as AntdApp, ConfigProvider } from "antd";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as ReactRouter } from "react-router-dom";
import "~/global/global.css";
import { antdConfig, queryClient } from "~/global/libraries.config.ts";
import App from "./App.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ReactRouter>
      <QueryClientProvider client={queryClient}>
        <AntdApp>
          <ConfigProvider {...antdConfig}>
            <App />
          </ConfigProvider>
        </AntdApp>
      </QueryClientProvider>
    </ReactRouter>
  </React.StrictMode>,
);
