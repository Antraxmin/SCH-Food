import { STORE_KEY } from "@/hooks/useStore";
import { Store } from "@/types/store";
import ListItem from "./ListItem";
import useSWR from "swr";
import useCurrentStore, { CURRENT_STORE_KEY } from "@/hooks/useCurrentStore";
import DetailPage from "../detail/DetailPage";
import { useState } from "react";

const ListSection = () => {
  const { data: stores } = useSWR<Store[]>(STORE_KEY);
  const { data: currentStore } = useSWR<Store>(CURRENT_STORE_KEY);
  const { setCurrentStore, clearCurrentStore } = useCurrentStore();
  const [expanded, setExpanded] = useState(false);

  if (!stores) return null;
  return (
    <div className=" bg-gray-200 mt-80 z-2">
      {stores.map((store) => {
        return (
          <ListItem
            name={store.name}
            key={store.nid}
            nid={store.nid}
            description={store.description}
            kind={store.kind}
            coordinates={store.coordinates}
            phone={store.phone}
            images={store.images}
            address={store.address}
            menus={store.menus}
            onClick={() => {
              setCurrentStore(store); // 클릭한 식당을 currentStore로 지정
              console.log(store.name);
              <DetailPage currentStore={currentStore} expanded={expanded} />;
            }}
          />
        );
      })}
    </div>
  );
};

export default ListSection;
