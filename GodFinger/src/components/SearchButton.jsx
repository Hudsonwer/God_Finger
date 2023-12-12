import React from 'react';
import { useState } from 'react';
import styles from "./SearchButton.module";
import { View, Text, Image, TextInput, TouchableWithoutFeedback } from "react-native";

const SearchButton = () => {

  const [Search, setSearch] = useState('');

  function Sent() {
    let SearchTreated = Search.trim().replace(/ /g, "%20");
    console.log(SearchTreated)
  }

  return (
    <View style={styles.search}>
      <TextInput placeholder="Search" value={Search} onChangeText={setSearch} selectionColor={"black"} style={styles.input} />
      <TouchableWithoutFeedback onPress={Sent}>
        <Image style={styles.logo} source={require("../assets/lupa.png")} />
      </TouchableWithoutFeedback>
    </View>
  )
}

export default SearchButton