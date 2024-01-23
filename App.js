import { useState } from "react";
import { StyleSheet, ImageBackground, Text, View } from "react-native";
import StartScreen from "./screens/StartScreen";
import { LinearGradient } from "expo-linear-gradient";
import GameScreen from "./screens/GameScreen";

export default function App() {
  const [number, setNumber] = useState();

  function pickedNumberHandler(pickedNumber) {
    setNumber(pickedNumber);
  }
  let screen = <StartScreen onValue={pickedNumberHandler} />;

  if (number) {
    screen = <GameScreen />;
  }
  return (
    <LinearGradient colors={["#4e0329", "#ddb52f"]} style={styles.rootScreen}>
      <ImageBackground
        source={require("./assets/images/background.jpg")}
        style={styles.rootScreen}
        resizeMode="cover"
        imageStyle={styles.backGround}
      >
        {screen}
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    backgroundColor: "#ddb521",
  },
  backGround: {
    opacity: 0.7,
  },
});
