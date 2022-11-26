import { useCallback, useEffect, useState } from "react"
import { StyleSheet, Text, View } from "react-native"

// ENV
import { API_URL} from "@env"
// Database
const backendURL = API_URL
const auctionRoute = "api/v1/auctions/start/"

export const AuctionDetails = (props) => {
    
    const [auction , setAuction] = useState({
        title: "",
        price: 0,
        winner: {username: ""},
        description: "",
        user: {userame: ""},
        participants: [],
    })
    const [timeRemaining, setTimeRemaining] = useState({
        hours: 0,
        minutes: 0,
        seconds: 0,
    })
    // console.log("AUCTION: ", timeRemaining)
    const getAuction = useCallback(() => {
        fetch(`${backendURL}${auctionRoute}${props.auction.id}`)
        .then(response => response.json())
        .then(data => {
            // console.log("DATA", data.data)
            props.reloadAuction(data.data)
            setAuction(data.data)}
            )
    },[auction])
    
    const setCountDown = (auction) => {
        // console.log(auction.auction_date)
        let countdown = new Date(auction.auction_date).getTime() - new Date().getTime()
        let seconds = Math.floor(countdown/ 1000)
        let minutes = Math.floor(seconds / 60)
        let hours = Math.floor(minutes / 60)
        setTimeRemaining({
            hours: hours % 24,
            minutes: minutes % 60,
            seconds: seconds % 60
        })
    }
    
    useEffect(() => {
        const interval = setInterval(() => {
            getAuction()
            setCountDown(auction)
        }, 1000)
        return () => {
            clearInterval(interval)
        }
        
    },[auction])
    
    return(
        <View style = {styles.container}>
            <Text style = {styles.runningPrice}>Current Bid Price: 
                <Text style = {styles.runningPrice}> ${auction.price} </Text>
            </Text>
            <Text style = {styles.title}>Highest Bidder: 
                <Text style = {styles.description}> {auction.winner?.username}</Text>
            </Text>
            <View style = {styles.descriptionContainer}>
                <View>
                    <Text style = {styles.title}>Title:
                        <Text style = {styles.description}> {auction.title}</Text>
                    </Text>
                    
                    <Text style = {styles.title}>Owner:
                        <Text style = {styles.description}> {auction.user.username}</Text>
                    </Text>
                    <Text style = {styles.title}>participants: 
                        <Text style = {styles.description}> {auction.participants.length}</Text>
                    </Text>
                </View>
                <View>
                    {/* removing bid countdown, will do one countdown only for now */}
                    {/* <Text style = {styles.title}>Bid Countdown: 
                        <Text style = {styles.description}> {auction.highest_bid} </Text>
                    </Text> */}
                    <Text style = {styles.title}>(Time Remaining)
                        {/* <Text style = {styles.description}> {Date(auction.auction_date)} </Text> */}
                    </Text>
                    <Text style = {styles.title}>Hours: {timeRemaining.hours}</Text>
                    <Text style = {styles.title}>Minutes: {timeRemaining.minutes}</Text>
                    <Text style = {styles.title}>Seconds: {timeRemaining.seconds}</Text>
                </View>
            </View>
            <View style = {{flex: 1}}>
                {/* <Text style = {styles.description}>Increment: ${auction.price_increment}</Text> */}
                <View style = {styles.logsContainer}>
                    <Text style = {styles.title}>Logs: 
                        <Text style = {styles.description}> {auction.logs}</Text>
                    </Text>
                </View>
            </View>
        </View>
    )
}

styles = StyleSheet.create({
    container: {
        // borderWidth: 1,
        // borderColor: 'blue',
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-between",
        margin: 5
    },
    description: {
        fontFamily: "copperplate",
        fontSize: 15,
        fontWeight: "100"
    },
    descriptionContainer: {
        // borderWidth: 1,
        // borderColor: 'green',
        flexDirection: "row",
        justifyContent: "space-between"
    },
    logsContainer: {
        borderWidth: 1,
        margin: 1,
        flex: 1,
        margin: 5,
    },
    runningPrice: {
        fontFamily: "copperplate",
        fontSize: 30,
        fontWeight: "500",
        margin: 5,
    },
    title: {
        fontFamily: "copperplate",
        fontSize: 20,
        fontWeight: "500",
        margin: 5,
    },


})