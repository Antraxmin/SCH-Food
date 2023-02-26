import { useEffect } from "react";
import type { Marker } from "../../types/map";

const Marker = ({ map, coordinates }: Marker): null => {
  useEffect(() => {
    let marker: naver.maps.Marker | null = null;
    // 지도 객체가 존재한다면 새로운 마커 객체 생성
    if (map) {
      marker = new naver.maps.Marker({
        map: map, // 표시할 지도 객체
        position: new naver.maps.LatLng(...coordinates), // 표시할 위치
        //icon,
      });
    }

    return () => {
      marker?.setMap(null);
    };
  }, [map]);

  return null;
};

export default Marker;
