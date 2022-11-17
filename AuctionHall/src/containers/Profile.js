import { StyleSheet, Text, View } from "react-native"


export const Profile = (props) => {
    // console.log(props)
    return (
        <View style = {styles.container}>
            <Text style = {styles.text} >Username: {props.user.user.username}</Text>
            <Text style = {styles.text} >Email Address: {props.user.user.email}</Text>
        </View>
    )
    
}


const styles = StyleSheet.create({
    container: {
        // borderWidth: 1,
        // borderColor: "red",
        flex: 1,
    },
    text: {
        fontSize: 20,
        fontFamily: "copperplate",
        margin: 10
    }
})