import { useQuery } from "@tanstack/react-query";
import { getCurentUser } from "../../services/apiAuth";

export function useUser() {
  const { isLoading, data: user } = useQuery({ queryKey: ["user"], queryFn: getCurentUser });

  return { isLoading, user, isAuthenticated: user?.role === "authenticated" };
}
