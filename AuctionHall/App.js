import React from "react";
import { 
  View,
  Text,
  StyleSheet
 } from "react-native";

const App = () => {
  return(
    <View style={styles.headersContainer}>
      <Text>Hello World!</Text>
    </View>

  )
}

const styles = StyleSheet.create({
    headersContainer: {
        display: "flex",
        alignItems: "center",
        marginTop: 50,
    }
})

export default App