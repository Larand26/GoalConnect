import React from "react";
import { View, ScrollView } from "react-native";
import { chats } from "../../data/chats";
import { styles } from "./ChatScreen.styles";
import Chat from "../../components/Chat";

export default function ChatScreen() {
  return (
    <View style={styles.constainer}>
      <ScrollView>
        <Chat chat={chats[0]} />
      </ScrollView>
    </View>
  );
}
