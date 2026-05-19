import { View, Text, Image } from "react-native";
import InputText from "../../components/InputText";
import InputPassword from "../../components/InputPassword";
import Button from "../../components/Button";

import { styles } from "./LoginScreen.styles";

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Image
          source={require("../../assets/images/logo.png")}
          style={styles.logo}
        />
        <View style={styles.inputContainer}>
          <InputText label="Login" icon="email" />
          <InputPassword label="Senha" />
          <Text style={styles.link}>Não tenho uma conta</Text>
        </View>
        <Button text="Entrar" />
      </View>
    </View>
  );
}
