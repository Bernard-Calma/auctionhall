import { View, Text, StyleSheet, Image } from "react-native"


export const ShowAuction = (props) => {
    // console.log(props.auction.user.id === props.user.id)
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
                <View style = {styles.titleContainerInisde}>
                    <Text 
                        adjustsFontSizeToFit
                        style = {styles.title}>{props.auction.title}</Text>
                    <Text 
                        adjustsFontSizeToFit
                        style = {styles.descriptionText}>Host: {props.auction.user.username}</Text>
                </View>
                <View style = {styles.titleContainerInisde}>
                    <Text style = {styles.descriptionText}>Starting Price: ${props.auction.price}</Text>
                    <Text style = {styles.descriptionText}>Increment: ${props.auction.price_increment}</Text>
                </View>
            </View>
            <View style={styles.descriptionContainer}>
                <Text style = {styles.descriptionText}>Description:</Text>
                <Text style = {styles.descriptionTextSmaller}>{props.auction.description}</Text>
            </View>
            <View style={styles.auctionDateContainer}>
                <Text style = {styles.descriptionText}>Auction Date: {date.toDateString()}</Text>
            </View>
            <View style = {styles.addEditContainer}>
                {
                    !props.user.id === props.auction.user.id ?
                        <Text style = {styles.addEdit}>Join</Text>
                    :
                    <>
                    </>
                }
                
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
        flex: .05,
        justifyContent: "center",
        alignItems: "center"
    },
    auctionDateContainer: {

    },
    container: {
        // borderWidth: 1,
        // borderColor: 'red',
        flex: 1,
    },
    descriptionContainer: {
        flex: 0.3,
        borderWidth: 1,
        margin: 5,
    },
    descriptionText: {
        // borderWidth: 1,
        fontSize: 15,
        margin: 5,
        fontFamily: "copperplate",
    },
    descriptionTextSmaller: {
        fontFamily: "copperplate", 
        textAlign: "center"
    },
    imageContainer: {
        // borderWidth: 1,
        // borderColor: 'blue',
        flex: 1,
        // background color until image is implemented
        backgroundColor: "gray"
    },
    image: {

    },
    title: {
        // borderWidth: 1,
        fontFamily: "copperplate",
        fontSize: 25,
        margin: 5,
    },
    titleContainer: {
        // borderWidth: 1,
        flexWrap: "wrap",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    titleContainerInisde: {
        flex: 1,
        // borderWidth: 1,
    }
})