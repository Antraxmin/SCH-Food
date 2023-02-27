import { useCallback } from "react";
import { Staff } from "../types/store";
import { mutate } from "swr";

export const STAFF_KEY = "/staff";

const useStaff = () => {
  const initializeStaff = useCallback((store: Staff) => {
    mutate(STAFF_KEY, store);
  }, []);

  return {
    initializeStaff,
  };
};

export default useStaff;
