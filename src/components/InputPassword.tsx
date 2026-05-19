import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useState } from "react";

export default function InputPassword(props: {
  placeholder?: string;
  label?: string;
  value?: string;
  onChangeText?: (text: string) => void;
}) {
  const [isSecure, setIsSecure] = useState(true);

  return (
    <View style={styles.container}>
      {props.label && <Text style={styles.label}>{props.label}</Text>}
      <View style={styles.inputContainer}>
        <TextInput
          placeholder={props.placeholder}
          value={props.value}
          onChangeText={props.onChangeText}
          style={styles.input}
          secureTextEntry={isSecure}
        />

        <TouchableOpacity onPress={() => setIsSecure((prev) => !prev)}>
          <MaterialCommunityIcons
            name={isSecure ? "eye" : "eye-off"}
            size={20}
            color="#1c1c1c"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  label: {
    fontFamily: "Bebas-Regular",
    fontSize: 20,
    color: "#1c1c1c",
  },
  inputContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FEF5C8",
    borderRadius: 50,
    paddingHorizontal: 15,
    paddingVertical: 2,
    borderWidth: 1,
    borderColor: "#1c1c1c",
    justifyContent: "space-between",
  },
  input: {
    width: "90%",
  },
});
