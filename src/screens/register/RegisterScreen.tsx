import { View, KeyboardAvoidingView } from "react-native";
import InputText from "../../components/InputText";
import InputPassword from "../../components/InputPassword";
import Button from "../../components/Button";

import { styles } from "./Register.styles";

export default function RegisterScreen() {
  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.form}>
        <InputText label="Nome completo" />
        <InputText label="Email" />
        <InputText label="Celular" />
        <InputPassword label="Senha" />
        <InputPassword label="Confirmar Senha" />
        <Button text="Cadastrar" />
      </View>
    </KeyboardAvoidingView>
  );
}
