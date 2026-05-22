import { View, Text, StyleSheet, Image } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import type { iChats } from "../data/chats";

export default function Chat(props: { chat: iChats }) {
  return (
    <View style={styles.container}>
      <View style={styles.user}>
        <View style={styles.photoContainer}>
          {props.chat.photo ? (
            <Image source={props.chat.photo} style={styles.photo} />
          ) : (
            <MaterialCommunityIcons name="account" size={40} color="1c1c1c" />
          )}
        </View>
        <View>
          <Text style={styles.name}>{props.chat.name}</Text>
          <Text style={styles.text}>
            {props.chat.lastMessage || "Nenhuma mensagem"}
          </Text>
          <Text style={styles.text}>{props.chat.status || "Offline"}</Text>
        </View>
      </View>
      <View>
        <MaterialCommunityIcons name="chat" size={30} color="#fff" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 8,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  text: {
    fontSize: 10,
    color: "#fff",
  },
  photo: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  user: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  photoContainer: {
    borderRadius: "50%",
    backgroundColor: "#FEF5C8",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "#00988D",
    padding: 4,
  },
  name: {
    fontSize: 16,
    fontFamily: "Bebas-Regular",
    color: "#fff",
  },
});
