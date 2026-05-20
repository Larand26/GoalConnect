import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";

// Screens
import LoginScreen from "./src/screens/login/LoginScreen";
import RegisterScreen from "./src/screens/register/RegisterScreen";
import HomeScreen from "./src/screens/home/HomeScreen";
import EventScreen from "./src/screens/event/EventScreen";

// Bars
import TopBar from "./src/components/TopBar";
import NavBar from "./src/components/NavBar";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [screen, setScreen] = useState("event");
  const [loggedIn, setLoggedIn] = useState(true);

  const [loaded, error] = useFonts({
    "Inter-Regular": require("./assets/fonts/Inter/Inter_18pt-Regular.ttf"),
    "Bebas-Regular": require("./assets/fonts/Bebas_Neue/BebasNeue-Regular.ttf"),
    "Digital-Numbers-Regular": require("./assets/fonts/Digital_Numbers/DigitalNumbers-Regular.ttf"),
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
      {loggedIn && <TopBar />}
      {screen === "login" && <LoginScreen />}
      {screen === "register" && <RegisterScreen />}
      {screen === "home" && <HomeScreen />}
      {screen === "event" && <EventScreen />}
      {loggedIn && <NavBar />}
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#013750",
  },
  text: {
    fontFamily: "Bebas-Regular",
  },
});
