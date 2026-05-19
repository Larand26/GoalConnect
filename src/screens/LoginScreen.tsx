import { View, Text, StyleSheet, Image } from "react-native";
import InputText from "../components/InputText";
import Button from "../components/Button";

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Image
          source={require("../assets/images/logo.png")}
          style={styles.logo}
        />
        <View style={styles.inputContainer}>
          <InputText label="Login" icon="email" />
          <InputText label="Password" icon="lock" />
          <Text style={styles.link}>Não tenho uma conta</Text>
        </View>
        <Button text="Entrar" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 120,
    height: 120,
  },
  form: {
    width: "80%",
    height: "60%",
    backgroundColor: "#ffffffcb",
    padding: 20,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "space-around",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  inputContainer: {
    width: "100%",
    gap: 20,
  },
  text: {
    fontFamily: "Bebas-Regular",
    fontSize: 24,
  },
  link: {
    color: "#00988D",
    textDecorationLine: "underline",
    fontSize: 10,
  },
});
