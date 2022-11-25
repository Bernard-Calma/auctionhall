import { useState } from "react"
import { StyleSheet, Text, View } from "react-native"
import { Database } from "../assets/others/links"
import { AuctionStartCountDown } from "../components/AuctionStartCountDown"
import {ImagePreview} from "../components/ImagePreview"
import { RaiseBid } from "../components/RaiseBid"
import { AuctionDetails } from "./AuctionDetails"

export const AuctionStart = (props) => {
    console.log(`${new Date} - User: ${props.user.id} view Auction: ${props.auction.id}`)
    // this starts and ends the auction
    let [auctionStart, setAuctionStart] = useState(false)
    // This is starts and end the bid countdown
    let [bidCountdown, setBidCountdown] = useState(false)
    let [auctionCountdown, setAuctionCountdown] = useState(5)
    // console.log("Auction Start: ",auctionStart)
    // console.log("Bid Countdown: ",bidCountdown)

    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                < ImagePreview
                    style = {styles.image}
                    uri={props.auction.photo}
                />
            </View>
            <AuctionDetails 
                style = {{flex: 1}}
                auction = {props.auction}
            />
            <View style = {styles.addEditContainer}>
                {
                    !(props.user.id === props.auction.user.id) ?
                    <>
                        <RaiseBid />
                    </>  
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
        justifyContent: "center",
        alignItems: "center"
    },
    auctionDateContainer: {
        borderWidth: 1,
        flexDirection: 'row',
        justifyContent: "space-between"
    },
    auctionCountdown:{
        fontFamily: "copperplate",
        fontSize: 20,
        margin: 2,
    },
    auctionCountdownContainer: {
        // borderWidth: 1,
        borderColor: 1,
        flexDirection: "row"
    },
    container: {
        // borderWidth: 1,
        // borderColor: 'red',
        flex: 1,
    },
    countdown: {
        // borderWidth: 1,
        flexDirection: "row",
        marginRight: 5,
    },  
    currentPrice: {
        fontFamily: "copperplate",
        fontSize: 25,
        margin: 5,
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
        flex: 1,
    },
    start: {

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
    },
    topUser: {
        fontFamily: "copperplate",
        fontSize: 25,
        margin: 5,
    }
})