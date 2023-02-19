import Map from "./Map";

const MapSection = () => {
  return (
    <Map
      onLoad={() => {
        console.log("success loading");
      }}
    />
  );
};

export default MapSection;
