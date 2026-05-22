import React from "react";
import { View, ScrollView, TextInput } from "react-native";
import { chats } from "../../data/chats";
import { styles } from "./ChatScreen.styles";
import Chat from "../../components/Chat";

export default function ChatScreen() {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="pesquisar..."
        placeholderTextColor="#FEF5C8"
        style={styles.input}
      />
      <ScrollView>
        {chats.map((chat) => (
          <Chat key={chat.id} chat={chat} />
        ))}
      </ScrollView>
    </View>
  );
}
