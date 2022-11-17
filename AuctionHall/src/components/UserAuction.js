import { StyleSheet, Text, View, Dimensions } from "react-native"


export const UserAuction = (props) => {
    return(
        <View style = {styles.containter}>
            <Text style = {styles.cancel}>Cancel</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    cancel:{
        fontFamily: "copperplate",
        fontWeight: "500",
        fontSize: 20,
        margin: 5
    },
    containter: {
        // borderWidth: 1,
        // borderColor: 'blue',
        // Background color for now until picture is enabled
        backgroundColor: "gray",
        marginBottom: 5,
        height: Dimensions.get('window').height / 4.22,
        flexDirection: "row",
        justifyContent: "flex-end"
    },
})