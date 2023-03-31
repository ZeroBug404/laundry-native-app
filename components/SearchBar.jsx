import { Feather } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, TextInput, View } from "react-native";

const SearchBar = () => {
  return (
    <View
      style={{
        padding: 10,
        margin: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderWidth: 0.8,
        borderColor: "#C0C0C0",
        borderRadius:7,
      }}
    >
      <TextInput placeholder="Search for item or more..." />
      <Feather name="search" size={24} color="#fd5c63" />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({});
