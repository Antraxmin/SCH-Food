import useMap from "@/hooks/useMap";
import { NaverMap } from "@/types/map";
import Map from "./Map";
import Markers from "./Markers";

const MapSection = () => {
  const { initializeMap } = useMap();
  const onLoadMap = (map: NaverMap) => {
    initializeMap(map); // 지도가 load될때 실행 - 지도 객체를 전역상태로 저장
  };

  return (
    <>
      <Map onLoad={onLoadMap} />
      <Markers />
    </>
  );
};

export default MapSection;
