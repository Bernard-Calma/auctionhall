import React from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";

import { Title } from "../components/Title";

export const Login = () => {
    return(
        <View style={styles.headersContainer}>
          <Title />
        </View>
    
    )
}
    
const styles = StyleSheet.create({
    headersContainer: {
        flex: 1,
        display: "flex",
        alignItems: "center",
        marginTop: 50,
    }
})