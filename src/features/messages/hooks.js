//per invio di dati (POST PUT PATCH DELETE) si usa useMutation
import { useMutation } from "@tanstack/react-query";
import { postMessage } from "./api";

export const usePostMessage = () => {
  return useMutation({
    mutationFn: postMessage,
  });
};
