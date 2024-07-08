import { useQuery } from "@tanstack/react-query";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import authApis from "~/apis/auths.api";
import useAuthStore from "~/stores/auth.store";
import { LoadingPage } from "../animation/loading/LoadingPage";

interface Props {
  children: React.ReactNode;
}

export default function AuthGuard({ children }: Props) {
  const navigate = useNavigate();
  const token = localStorage.getItem("accessToken");
  const setCurrentUser = useAuthStore((state) => state.setCurrentUser);

  const { data, error } = useQuery({
    queryKey: ["info"],
    queryFn: () => authApis.getInfo(),
    enabled: !!token,
  });

  useEffect(() => {
    if (!token) {
      navigate("/auth/login");
    }
  }, [token, error, navigate]);

  // set to store
  useEffect(() => {
    if (data) {
      setCurrentUser(data);
    }
  }, [data, setCurrentUser]);

  if (data) {
    return children;
  }

  return <LoadingPage />;
}
