import { MAP_KEY } from "@/hooks/useMap";
import { STORE_KEY } from "@/hooks/useStore";
import { NaverMap } from "@/types/map";
import { Store } from "../../types/store";
import Marker from "./Marker";
import useSWR from "swr";

const Markers = () => {
  const { data: map } = useSWR<NaverMap>(MAP_KEY);
  const { data: stores } = useSWR<Store[]>(STORE_KEY);

  if (!map || !stores) return null;
  return (
    <>
      {stores.map((store) => {
        return (
          <Marker map={map} coordinates={store.coordinates} key={store.nid} />
        );
      })}
    </>
  );
};

export default Markers;
