import { TextInput, StyleSheet } from "react-native"

export const Textbox = (props) => {

    return(
        <TextInput 
            name = {props.name}
            placeholder = {props.name}
            onChange={props.handleChange}
            style = {styles.textBox}
            secureTextEntry = {props.secureTextEntry}
            value = {props.value}
        />
    )
}

const styles = StyleSheet.create({
    textBox: {
        borderWidth: 1,
        borderRadius: 10,
        height: 60,
        paddingLeft: 20,
        marginBottom: 30,
        fontSize: 25,
    },
})