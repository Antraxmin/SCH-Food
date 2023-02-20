import type { Coordinates } from "./store";
export type NaverMap = naver.maps.Map;

export type Marker = {
  map: NaverMap;
  coordinates: Coordinates;
  onClick?: () => void;
  title: string;
  //icon: HtmlIcon;
};

export type HtmlIcon = {
  content: string;
  size: naver.maps.Size;
  anchor: naver.maps.Point;
};
