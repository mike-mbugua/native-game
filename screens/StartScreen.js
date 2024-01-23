import { useState } from "react";
import { TextInput, View, StyleSheet, Alert } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

function StartScreen({ onValue }) {
  const [enteredNumber, setEnteredNumber] = useState("");

  function inputHandler(enteredText) {
    setEnteredNumber(enteredText);
  }

  function resetInputHandler() {
    setEnteredNumber("");
  }

  function confirmInputHandler() {
    const chosenNumber = parseInt(enteredNumber);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert("Invalid Number", "Number should be between 1 and 99", [
        { text: "okay", style: "destructive", onPress: resetInputHandler },
      ]);
      return;
    }
    onValue(chosenNumber);
  }
  return (
    <View style={styles.input}>
      <TextInput
        style={styles.textInput}
        maxLength={2}
        keyboardType="number-pad"
        autoCorrect={false}
        value={enteredNumber}
        onChangeText={inputHandler}
      />
      <View style={styles.buttons}>
        <PrimaryButton onClick={resetInputHandler}>Reset</PrimaryButton>
        <PrimaryButton onClick={confirmInputHandler}>Confirm</PrimaryButton>
      </View>
    </View>
  );
}
export default StartScreen;

const styles = StyleSheet.create({
  input: {
    backgroundColor: "#4e0329",
    marginTop: 100,
    marginHorizontal: 15,
    borderRadius: 20,
    elevation: 8,
    padding: 10,
    shadowColor: "black",
    shadowOffset: 10,
    shadowOpacity: 1,
    alignItems: "center",
    height: 200,
    justifyContent: "center",
  },
  textInput: {
    // borderColor: "#1E1E1E",
    color: "#ddb521",
    borderBottomWidth: 2,
    borderBottomColor: "#ddb521",
    width: 100,
    fontSize: 30,
    marginBottom: 10,
    textAlign: "center",
  },
  buttons: {
    display: "flex",
    flexDirection: "row",
  },
});
