import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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
    maxHeight: "60%",
    backgroundColor: "#ffffffcb",
    borderRadius: 20,
    borderWidth: 1,
    overflow: "hidden",
  },
  formContent: {
    alignItems: "center",
    padding: 20,
    gap: 20,
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
