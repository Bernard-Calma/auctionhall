import { View, Text, StyleSheet, Image } from "react-native"


export const ShowAuction = (props) => {
    // console.log(props.auction.auction_date)
    date = new Date(props.auction.auction_date)
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image
                    style={styles.image}
                />
            </View>
            <View style={styles.titleContainer}>
                <View>
                    <Text style = {styles.title}>{props.auction.title}</Text>
                    <Text>Host: {props.auction.user.username}</Text>
                </View>
                <View>
                    <Text>Starting Price: ${props.auction.price}</Text>
                    <Text>Increment: ${props.auction.price_increment}</Text>
                </View>
            </View>
            <Text>Description</Text>
            <View style={styles.descriptionContainer}>
                <Text>{props.auction.description}</Text>
            </View>
            <View style={styles.auctionDateContainer}>
                <Text>Auction Date: {date.toDateString()}</Text>
            </View>
            <View style = {styles.addEditContainer}>
                <Text style = {styles.addEdit}>Join</Text>
            </View>
        </View>
    )
}

styles = StyleSheet.create({
    addEdit: {
        borderWidth: 1,
        borderRadius: 30,
        width: 60,
        height: 60,
        paddingTop: 10,
        textAlign: "center",
        backgroundColor: "gray",
        overflow: "hidden",
        color: "white",
        fontSize: 30,
        fontWeight: "500"
    },
    addEditContainer: {
        flex: .1,
        justifyContent: "center",
        alignItems: "center"
    },
    auctionDateContainer: {

    },
    container: {
        borderWidth: 1,
        borderColor: 'red',
        flex: 1,
    },
    descriptionContainer: {
        flex: 0.1,
        borderWidth: 1,
    },
    imageContainer: {
        borderWidth: 1,
        borderColor: 'blue',
        flex: 1,
        // background color until image is implemented
        backgroundColor: "gray"
    },
    image: {

    },
    title: {
        fontSize: 25,
    },
    titleContainer: {
        flexWrap: "wrap",
        flexDirection: "row",
        justifyContent: "space-between"
    },
})