import type { ImageSourcePropType } from "react-native";

interface Event {
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
    date: new Date("2026-06-13-19:00:00"),
    location: "Estádio MetLife",
    peoples: 103,
    image: require("../assets/images/Metlife_stadium.jpg"),
  },
  {
    id: "2",
    title: "EUA x Paraguai",
    distance: 1000,
    date: new Date("2026-06-12-22:00:00"),
    location: "Estádio BBVA",
    peoples: 35,
    image: require("../assets/images/BBVA_stadium.jpg"),
  },
  {
    id: "3",
    title: "Catar x Suiça",
    distance: 7000,
    date: new Date("2026-06-13-16:00:00"),
    location: "Estádio Azteca",
    peoples: 6,
    image: require("../assets/images/Azteca_stadium.jpg"),
  },
];
