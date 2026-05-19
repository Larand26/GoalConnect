import { View, Text, StyleSheet } from "react-native";
import InputText from "../components/InputText";

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Login Screen</Text>
      <InputText label="Login" icon="email" />
      <InputText label="Password" icon="lock" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontFamily: "Bebas-Regular",
    fontSize: 24,
  },
});
