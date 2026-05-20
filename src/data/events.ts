import type { ImageSourcePropType } from "react-native";

export interface Event {
  id: string;
  title: string;
  distance: number;
  date: Date;
  location: string;
  peoples: number;
  image: ImageSourcePropType;
}

export const events = [
  {
    id: "1",
    title: "Brasil x Marrocos",
    distance: 2000,
    date: new Date(2026, 5, 13, 19, 0, 0),
    location: "Estádio MetLife",
    peoples: 103,
    image: require("../assets/images/Metlife_stadium.jpg.webp"),
  },
  {
    id: "2",
    title: "EUA x Paraguai",
    distance: 1000,
    date: new Date(2026, 5, 12, 22, 0, 0),
    location: "Estádio BBVA",
    peoples: 35,
    image: require("../assets/images/BBVA_stadium.jpg"),
  },
  {
    id: "3",
    title: "Catar x Suiça",
    distance: 7000,
    date: new Date(2026, 5, 13, 16, 0, 0),
    location: "Estádio Azteca",
    peoples: 6,
    image: require("../assets/images/Azteca_stadium.jpg"),
  },
];
