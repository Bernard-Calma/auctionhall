import { TextInput, View, StyleSheet } from "react-native"

export const Textbox = (props) => {

    return(
        <View>
            <TextInput 
                name = {props.name}
                placeholder = {props.name}
                onChange={props.handleChange}
                style = {styles.textBox}
                secureTextEntry = {props.secureTextEntry}
            />
        </View>

    )
}

const styles = StyleSheet.create({
    textBox: {
        borderWidth: 1,
        borderRadius: 10,
        height: 60,
        paddingLeft: 20,
        margin: 20,
        fontSize: 25,
    },
})