import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const navItems = [
  { id: "home", label: "Home", icon: "home", active: true },
  { id: "event", label: "Eventos", icon: "calendar", active: false },
  { id: "chat", label: "Chats", icon: "chat", active: false },
  { id: "perfil", label: "Perfil", icon: "account-circle", active: false },
] as const;

export default function NavBar(props: {
  changeScreen: (screen: string) => void;
  activeScreen?: string;
}) {
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        {navItems.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.navItem}
            onPress={() => props.changeScreen(item.id.toLowerCase())}
          >
            <MaterialCommunityIcons
              name={item.icon}
              size={28}
              color={
                props.activeScreen === item.id.toLowerCase()
                  ? "#00988D"
                  : "#1c1c1c"
              }
            />
            <Text
              style={[
                styles.label,
                {
                  color:
                    props.activeScreen === item.id.toLowerCase()
                      ? "#00988D"
                      : "#1c1c1c",
                },
              ]}
            >
              {item.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
    paddingHorizontal: 20,
    paddingVertical: 15,
    paddingBottom: 40,
  },
  container: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "#FFFACD",
    borderRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  navItem: {
    alignItems: "center",
    gap: 5,
  },
  label: {
    fontSize: 12,
    fontFamily: "Inter-Regular",
  },
});
