import React from 'react';
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  search: {
    padding: 5,
    borderRadius: 10,
    margin: 20,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "rgba(255,255,255,0.5)",
  },

  input: {
    fontSize: 25,
    flex: 1,
    padding: 3,
    color: "black",
  },

  logo: {
    width: 35,
    aspectRatio: 1,
  },
});

export default styles