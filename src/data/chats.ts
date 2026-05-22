import type { ImageSourcePropType } from "react-native";

export interface iChats {
  id: string;
  name: string;
  photo: ImageSourcePropType | null;
  lastMessage?: string;
  status?: string;
}

export const chats: iChats[] = [
  {
    id: "1",
    name: "@Gabriel_rodriges",
    photo: null,
    lastMessage: "E aí, tudo bem?",
    status: "Visto há 2h",
  },
  {
    id: "2",
    name: "@felipe_carnevale",
    photo: null,
    lastMessage: "Vamos marcar um jogo?",
    status: "Online",
  },
  {
    id: "3",
    name: "@Bruno_trova",
    photo: null,
    lastMessage: "Boa sorte para o Brasil na Copa!",
    status: "Visto há 1h",
  },
  {
    id: "4",
    name: "@Henrique_gerola",
    photo: null,
    lastMessage: "Onde você está?",
    status: "Visto há 30min",
  },
];
