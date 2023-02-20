import { NaverMap } from "@/types/map";
import Map from "./Map";

const MapSection = () => {
  const { initializeMap } = useMap();
  const onLoadMap = (map: NaverMap) => {
    initializeMap(map);
  };

  return <Map onLoad={onLoadMap} />;
};

export default MapSection;
function useMap(): { initializeMap: any } {
  throw new Error("Function not implemented.");
}
