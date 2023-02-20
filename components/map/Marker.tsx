import { useEffect } from "react";
import { Marker } from "../../types/map";

const Marker = ({ map, coordinates, onClick }: Marker) => {
  useEffect(() => {
    let marker: naver.maps.Marker | null = null;
    // 지도 객체가 존재한다면 새로운 마커 객체 생성
    if (map) {
      marker = new naver.maps.Marker({
        map: map, // 표시할 지도 객체
        position: new naver.maps.LatLng(...coordinates), // 표시할 위치
      });
    }
    if (onClick) {
      naver.maps.Event.addListener(marker, "clicked!", onClick);
    }
    return () => {
      marker?.setMap(null);
    };
  }, [map]);
};

export default Marker;
