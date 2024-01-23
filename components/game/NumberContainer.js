import { StyleSheet, Text, View } from "react-native";
import Colors from "../../constants/Colors";

function NumberContainer({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.textContainer}>{children}</Text>
    </View>
  );
}
export default NumberContainer;

const styles = StyleSheet.create({
  container: {
    margin: 20,
    padding: 30,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.primaryYellow,
  },
  textContainer: {
    textAlign: "center",
    color: Colors.textColor,
    fontSize: 25,
  },
});
