import { View, Text, StyleSheet, Image } from "react-native";

export default function TopBar() {
  return (
    <View style={styles.topBar}>
      <Image
        source={require("../assets/images/logo-inverted.png")}
        style={styles.logo}
      />
      <Text style={styles.title}>GoalConnect</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  topBar: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 2,
    paddingHorizontal: 20,
    paddingVertical: 10,
    paddingTop: 40,
  },
  logo: {
    width: 40,
    height: 40,
  },
  title: {
    color: "#fff",
    fontFamily: "Bebas-Regular",
    fontSize: 39,
  },
});
