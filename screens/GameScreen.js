import { Text, StyleSheet } from "react-native";

function GameScreen() {
  return <Text style={styles.screenHandler}>Game screen</Text>;
}

export default GameScreen;
const styles = StyleSheet.create({
  screenHandler: {
    padding: 24,
  },
});
