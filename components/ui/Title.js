import { StyleSheet, Text } from "react-native";
import Colors from "../../constants/Colors";

function Title({ children }) {
  return <Text style={styles.heading}>{children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
  heading: {
    fontSize: 25,
    borderColor: Colors.textColor,
    color: Colors.textColor,
    padding: 14,
    textAlign: "center",
    borderWidth: 2,
    marginTop: 5,
    fontWeight: "700",
  },
});
