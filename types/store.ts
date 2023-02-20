type latitude = number;
type longitude = number;

export type Coordinates = [latitude, longitude];

export type Menu = { name: string; price: string };
export type Store = {
  id: number;
  name: string;
  description: string;
  kind: string;
  coordinates: Coordinates;
  phone: string;
  images: string[];
  address: string;
  menus: Menu[];
};
