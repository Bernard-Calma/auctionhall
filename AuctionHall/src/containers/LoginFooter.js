import { View, Text, StyleSheet } from "react-native"

export const LoginFooter = (props) => {
    return(
        <View style={styles.container}>
            {!props.user.signUp?
            <>
                <Text style={styles.text}>
                    Don't have an account? 
                </Text>
                <Text
                    style={styles.link} 
                    onPress = {props.handleSignUp}
                >
                    Sign Up
                </Text>
            </>
            :
            <>
                <Text style={styles.text}>
                    Already have an account? 
                </Text>   
                <Text
                    style={styles.link}
                    onPress = {props.handleSignUp}
                >
                    Sign In
                </Text>
            </>
            }
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        // borderColor: "red",
        // borderWidth: 1,
        marginLeft: 10,
        flexDirection: 'row',
        marginBottom: 20
    },
    text: {
        fontSize: 20,
    },
    link: {
        // borderColor: 'green',
        // borderWidth: 1,
        marginLeft: 5,
        fontSize: 20,
        color: 'gray'
    }
})