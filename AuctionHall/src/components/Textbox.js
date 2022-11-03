import React from "react"
import { TextInput, View, Text, Keyboard } from "react-native"

export const Textbox = (props) => {

    return(
        <View>
            <TextInput 
                name = {props.name}
                placeholder = {props.name}
                onChange={props.handleChange}
                style = {props.style}
                secureTextEntry = {props.secureTextEntry}
            />
        </View>

    )
}

