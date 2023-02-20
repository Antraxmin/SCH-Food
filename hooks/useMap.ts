import { NaverMap } from "@/types/map";
import { useCallback } from "react";
import { mutate } from "swr";
import type { Coordinates } from "../types/store";

export const MAP_KEY = "/map";
export const INITIAL_CENTER: Coordinates = [36.773756, 126.933502];
export const INITIAL_ZOOM = 16;

const useMap = () => {
  const initializeMap = useCallback((map: NaverMap) => {
    mutate(MAP_KEY, map); // MAP_KEY에 지도 객체를 전역으로 저장
  }, []);

  return {
    initializeMap,
  };
};

export default useMap;
