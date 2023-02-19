import Map from "./Map";

export default function MapSection() {
  return (
    <Map
      onLoad={() => {
        console.log("success loading");
      }}
    />
  );
}
