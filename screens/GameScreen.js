import { useState } from "react";
import { Text, StyleSheet, View } from "react-native";
import Title from "../components/ui/Title";
import NumberContainer from "../components/game/NumberContainer";

function generateRandomNumbersBetween(min, max, exclude) {
  const randomNumber = Math.floor(Math.random() * (max - min)) + min;

  if (randomNumber === exclude) {
    return generateRandomNumbersBetween(max, min, exclude);
  } else {
    return randomNumber;
  }
}
function GameScreen({ userNumber }) {
  const initiaState = generateRandomNumbersBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initiaState);
  return (
    <View style={styles.screenHandler}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
    </View>
  );
}

export default GameScreen;
const styles = StyleSheet.create({
  screenHandler: {
    marginTop: 20,
    padding: 24,
  },
});
