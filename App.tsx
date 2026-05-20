import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";

// Screens
import LoginScreen from "./src/screens/login/LoginScreen";
import RegisterScreen from "./src/screens/register/RegisterScreen";
import HomeScreen from "./src/screens/home/HomeScreen";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [screen, setScreen] = useState("login");

  const [loaded, error] = useFonts({
    "Inter-Regular": require("./assets/fonts/Inter/Inter_18pt-Regular.ttf"),
    "Bebas-Regular": require("./assets/fonts/Bebas_Neue/BebasNeue-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {screen === "login" && <LoginScreen />}
      {screen === "register" && <RegisterScreen />}
      {screen === "home" && <HomeScreen />}
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#013750",
  },
  text: {
    fontFamily: "Bebas-Regular",
  },
});
