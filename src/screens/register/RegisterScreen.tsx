import { KeyboardAvoidingView, ScrollView } from "react-native";
import InputText from "../../components/InputText";
import InputPassword from "../../components/InputPassword";
import Button from "../../components/Button";

import { styles } from "./Register.styles";

export default function RegisterScreen() {
  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <ScrollView
        style={styles.form}
        contentContainerStyle={styles.formContent}
      >
        <InputText label="Nome completo" />
        <InputText label="Email" />
        <InputText label="Celular" />
        <InputPassword label="Senha" />
        <InputPassword label="Confirmar Senha" />
        <Button text="Cadastrar" />
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
