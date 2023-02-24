import { useCallback } from "react";
import { Store } from "../types/store";
import { mutate } from "swr";

export const CLICKED_STORE_KEY = "/clicked-stores";

const useClicked = () => {
  const initializeClicked = useCallback((store: Store[]) => {
    mutate(CLICKED_STORE_KEY, store);
  }, []);

  return {
    initializeClicked,
  };
};

export default useClicked;
