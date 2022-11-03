import React from "react"
import { View, Text, StyleSheet } from "react-native"

export const LoginButton = (props) => {
    return (
        <View>
            <Text 
                style = {styles.loginButton}
                onPress = {props.handleSubmit}
            >{props.text} ➡</Text>
        </View>

    )
}
    const styles = StyleSheet.create({
        loginButton: {
            fontSize: 25,
            textAlign: "left",
            marginLeft: 200,
        }
    })