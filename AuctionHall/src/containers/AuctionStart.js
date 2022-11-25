import { useEffect, useState } from "react"
import { Alert, Button, StyleSheet, Text, View } from "react-native"
import { Database } from "../assets/others/links"
import { AuctionStartCountDown } from "../components/AuctionStartCountDown"
import { Countdown } from "../components/Countdown"
import {ImagePreview} from "../components/ImagePreview"

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
            <View style={styles.titleContainer}>
                <View style = {styles.titleContainerInisde}>
                    <Text 
                        adjustsFontSizeToFit
                        style = {styles.title}>{props.auction.title}</Text>
                    <Text 
                        adjustsFontSizeToFit
                        style = {styles.descriptionText}>Host: {props.auction.user.username}</Text>
                        <Text style = {styles.descriptionText}>Participants: {props.auction.participants.length}</Text>
                </View>
                <View style = {styles.titleContainerInisde}>
                    <Text style = {styles.currentPrice}>Current Price: ${props.auction.price}</Text>
                    <Text style = {styles.topUser}>Top User: UserID:{props.auction.participants[0]}</Text>
                </View>
            </View>
            <AuctionStartCountDown 
                setAuctionStart = {setAuctionStart}
                setBidCountdown = {setBidCountdown}
                auctionStart = {auctionStart}
                bidCountdown = {bidCountdown}
                auction = {props.auction}
                styles = {styles}
                />
            {/* Change this to be auction logs */}
            <View style={styles.descriptionContainer}>
                <Text style = {styles.descriptionTextSmaller}>{props.auction.logs}</Text>
            </View>
             {/* Change this to be auction logs */}
            <View style = {styles.addEditContainer}>
                {
                    !(props.user.id === props.auction.user.id) ?
                    <>
                        <Text style = {styles.addEdit}>$</Text>
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
        flex: .05,
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