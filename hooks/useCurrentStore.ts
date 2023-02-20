import { useCallback } from "react";
import { mutate } from "swr";
import type { Store } from "@/types/store";

export const CURRENT_STORE_KEY = "/current-store";

// 현재 클릭한 식당 정보를 전역 상태로 관리하는 custom hooks
const useCurrentStore = () => {
  // 선택한 식당 정보 객체를 받아 KEY에 저장
  const setCurrentStore = useCallback((store: Store) => {
    mutate(CURRENT_STORE_KEY, store);
  }, []);

  // 식당 정보 초기화
  const clearCurrentStore = useCallback(() => {
    mutate(CURRENT_STORE_KEY, null);
  }, []);

  return {
    setCurrentStore,
    clearCurrentStore,
  };
};
