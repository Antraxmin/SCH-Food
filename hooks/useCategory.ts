import { useCallback } from "react";
import { mutate } from "swr";

export const CURRENT_CATEGORY_KEY = "/current-category";

// 현재 클릭한 식당 정보를 전역 상태로 관리하는 custom hooks
const useCurrentCategory = () => {
  // 선택한 카테고리 정보를 받아 KEY에 저장
  const setCurrentCategory = useCallback((category_: string) => {
    mutate(CURRENT_CATEGORY_KEY, category_);
  }, []);

  const clearCurrentCategory = useCallback(() => {
    mutate(CURRENT_CATEGORY_KEY, null);
  }, []);

  return {
    setCurrentCategory,
    clearCurrentCategory,
  };
};

export default useCurrentCategory;
