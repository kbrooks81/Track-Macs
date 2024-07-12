import { View, Text, StyleSheet } from "react-native";
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";

const FoodListItem = ({ item }: { item: any }) => {
  return (
    <View style={styles.container}>
      <View style={{ flex: 1, gap: 5 }}>
        <Text style={{ fontWeight: "bold", fontSize: 16 }}>{item.label}</Text>
        <Text style={{ color: "dimgray" }}>
          {item.cal} cal, {item.brand}
        </Text>
      </View>

      <AntDesign name="pluscircleo" size={24} color="royalblue" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f6f6f8",
    padding: 10,
    borderRadius: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default FoodListItem;