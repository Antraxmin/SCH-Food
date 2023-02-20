const Marker = () => {
  const { data: map } = useSWR<NaverMap>(MAP_KEY);
};

export default Marker;
