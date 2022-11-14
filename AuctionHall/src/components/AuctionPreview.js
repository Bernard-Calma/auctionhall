import { View, Text, StyleSheet } from "react-native"

export const AuctionPreview = (props) => {
    return(
        <View style = {styles.container}>
            <Text>{props.auction.description}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 2,
        borderWidth: 1,
        width: "25%",
        height: "20%",
        // Background Color for now until pictures are added.
        backgroundColor: "gray",
    },
})