type latitude = number;
type longitude = number;

export type Coordinates = [latitude, longitude];

export type Menu = { name: string; price: string };
export type Store = {
  nid: number;
  name: string;
  description: string;
  topimg: string;
  kind: string;
  hour: string;
  coordinates: Coordinates;
  phone: string;
  images: string[];
  address: string;
  menus: Menu[];
  onClick?: () => void;
};

export type Src = {
  name: string;
  date: string;
  price: string;
  hours: string;
  break: string[];
  lunch: string[];
  dinner: string[];
};

export type Staff = {
  name: string;
  date: string;
  price: string;
  hours: string;
  lunch: string[];
};
