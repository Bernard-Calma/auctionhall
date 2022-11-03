import React from "react";
import { Text } from "react-native"

export const LoginFooter = (props) => {
    if (!props.user.signUp) {
        return(
            <Text
                style = {props.styles.footer}
            >
                Don't have an account? 
                <Text 
                    style= {props.styles.signUp}
                    onPress = {props.handleSignUp}
                >
                    Sign Up
                </Text>
            </Text>
        )
    } else {
        return (
            <Text
                style = {props.styles.footer}
            >
                Already have an account? 
                <Text 
                    style= {props.styles.signUp}
                    onPress = {props.handleSignUp}
                >
                    Sign In
                </Text>
            </Text>
        )
    }
}