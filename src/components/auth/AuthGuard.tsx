import React from "react";
import { LoadingPage } from "../animation/loading/LoadingPage";

interface Props {
  children: React.ReactNode;
}

export default function AuthGuard({ children }: Props) {
  // return <LoadingPage />;

  return children;
}
