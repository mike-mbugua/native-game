import { Text, View, StyleSheet, Pressable } from "react-native";

function PrimaryButton({ children, onClick }) {
  return (
    <Pressable onPress={onClick}>
      <View>
        <Text style={styles.button}>{children}</Text>
      </View>
    </Pressable>
  );
}

export default PrimaryButton;
const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    borderColor: "#ddb52f",
    fontSize: 15,
    color: "white",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 10,
    textAlign: "center",
    margin: 5,
    // border: "#9AB5E7",
    // borderWidth: 2,
  },
});
