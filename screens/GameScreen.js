import { Text, StyleSheet, View } from "react-native";
import Title from "../components/Title";

function GameScreen() {
  return (
    <View style={styles.screenHandler}>
      <Title>Opponent's Guess</Title>
      {/* <Text>Mike</Text> */}
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
