import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Something = () => {
  return (
    <View>
      <Text>Something</Text>
    </View>
  );
};

export default Something;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
