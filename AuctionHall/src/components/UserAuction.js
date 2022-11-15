import { StyleSheet, Text, View, Dimensions } from "react-native"


export const UserAuction = (props) => {
    return(
        <View style = {styles.containter}>
            <Text>{props.auction.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    containter: {
        // borderWidth: 1,
        // borderColor: 'blue',
        // Background color for now until picture is enabled
        backgroundColor: "gray",
        marginBottom: 5,
        height: Dimensions.get('window').height / 4.22,
    },
})