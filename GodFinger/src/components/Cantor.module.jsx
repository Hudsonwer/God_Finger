import React from 'react';
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  cantor: {
    margin: 5,
    marginLeft: 20,
    alignItems: "center",
    flexDirection: "row",
  },
  cantorDetails: {
    marginLeft: 80,
    flexDirection: "Column",    
  },
  cantorDetails2: {
    color: "red",
  },
  NomeCantor: {
    backgroundColor: "rgba(255,255,255,0.5)",
    padding: 6,
    borderRadius: 10,
    fontSize: 18,
  },
  logo: {
    width: 30,
    height: 30,
    margin: 5,
  },
  DescricaoeBotao: {
    flexDirection: "row",
    marginTop: 10,
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  Line: {
    marginTop: 10,
    alignSelf: "center",
  },
});

export default styles