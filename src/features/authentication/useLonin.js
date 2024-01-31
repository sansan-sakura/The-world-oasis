import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

export function useLogin() {
  const navigate = useNavigate();
  useMutation({
    mutationFn: ({ email, password }) => ({ email, password }),
    onSuccess: () => {
      navigate("/dashboard");
    },
  });
}
