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
                value = {props.value}
            />
        </View>

    )
}

const styles = StyleSheet.create({
    textBox: {
        width: "90%",
        borderWidth: 1,
        borderRadius: 10,
        height: 60,
        paddingLeft: 20,
        marginBottom: 30,
        marginLeft: 20,
        fontSize: 25,
    },
})