import { View, Text, StyleSheet, TextInput } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function InputText(props: {
  placeholder?: string;
  label?: string;
  icon?: keyof typeof MaterialCommunityIcons.glyphMap;
  value?: string;
  onChangeText?: (text: string) => void;
}) {
  return (
    <View style={styles.container}>
      {props.label && <Text style={styles.label}>{props.label}</Text>}
      <View style={styles.inputContainer}>
        <TextInput
          placeholder={props.placeholder}
          value={props.value}
          onChangeText={props.onChangeText}
        />
        {props.icon && (
          <MaterialCommunityIcons name={props.icon} size={20} color="#666" />
        )}
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
  },
});
