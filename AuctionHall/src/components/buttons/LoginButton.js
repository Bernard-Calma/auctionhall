import React from "react"
import { View, Text, StyleSheet } from "react-native"

export const LoginButton = (props) => {
    return (
        <View style = {styles.container}>
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
            textAlign: "right",
            marginLeft: 200,
            marginRight: 25,
        }
    })