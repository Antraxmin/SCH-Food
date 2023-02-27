import { useCallback } from "react";
import { Src } from "../types/store";
import { mutate } from "swr";

export const SRC_KEY = "/src";

const useSrc = () => {
  const initializeSrc = useCallback((store: Src) => {
    mutate(SRC_KEY, store);
  }, []);

  return {
    initializeSrc,
  };
};

export default useSrc;
