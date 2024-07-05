import React, { useEffect } from "react";
import { LoadingPage } from "../animation/loading/LoadingPage";
import { useQueries, useQuery } from "@tanstack/react-query";
import authApis from "~/apis/auths.api";
import { useNavigate } from "react-router-dom";

interface Props {
  children: React.ReactNode;
}

export default function AuthGuard({ children }: Props) {
  const navigate = useNavigate();
  const token = localStorage.getItem("accessToken");

  const { data, error } = useQuery({
    queryKey: ["info"],
    queryFn: () => authApis.getInfo(),
    enabled: !!token,
  });
  console.log("data :", data);

  useEffect(() => {
    if (!token || error) {
      navigate("/auth/login");
    }
  }, [token, error, navigate]);

  if (data) {
    return children;
  }

  return <LoadingPage />;
}
