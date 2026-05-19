import { View, Text } from "react-native";
import InputText from "../../components/InputText";
import Button from "../../components/Button";

import { styles } from "./Register.styles";

export default function RegisterScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <InputText label="Nome completo" icon="account" />
        <InputText label="Email" icon="email" />
        <InputText label="Celular" icon="cellphone-arrow-down-variant" />
        <InputText label="Senha" icon="lock" />
        <InputText label="Confirmar Senha" icon="lock" />
        <Button text="Register" />
      </View>
    </View>
  );
}
