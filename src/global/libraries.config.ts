import { QueryClient } from "@tanstack/react-query";
import { ConfigProviderProps } from "antd";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});

const COMPONENT_HEIGHT = 40;

const antdConfig: ConfigProviderProps = {
  theme: {
    token: {
      colorPrimary: "#00b96b",
    },
    components: {
      Input: {
        // controlHeight: COMPONENT_HEIGHT,
      },
    },
  },
};

export { queryClient, antdConfig };
