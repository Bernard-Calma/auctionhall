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
            .catch(err => console.error("ERROR: ", err))
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
        <View style = {{
            flexDirection: "column",
            justifyContent: "space-between",
            margin: 5
        }}>
            <Text style = {auctionStartStyles.runningPrice}>Current Bid Price: 
                <Text style = {auctionStartStyles.runningPrice}> ${auction.price} </Text>
            </Text>
            <Text style = {auctionStartStyles.title}>Highest Bidder: 
                <Text style = {auctionStartStyles.description}> {auction.winner?.username}</Text>
            </Text>
            <View style = {auctionStartStyles.descriptionContainer}>
                <View>
                    <Text style = {auctionStartStyles.title}>Title:
                        <Text style = {auctionStartStyles.description}> {auction.title}</Text>
                    </Text>
                    
                    <Text style = {auctionStartStyles.title}>Owner:
                        <Text style = {auctionStartStyles.description}> {auction.user.username}</Text>
                    </Text>
                    <Text style = {auctionStartStyles.title}>participants: 
                        <Text style = {auctionStartStyles.description}> {auction.participants.length}</Text>
                    </Text>
                </View>
                <View>
                    {/* removing bid countdown, will do one countdown only for now */}
                    {/* <Text style = {auctionStartStyles.title}>Bid Countdown: 
                        <Text style = {auctionStartStyles.description}> {auction.highest_bid} </Text>
                    </Text> */}
                    <Text style = {auctionStartStyles.title}>(Time Remaining)
                        {/* <Text style = {auctionStartStyles.description}> {Date(auction.auction_date)} </Text> */}
                    </Text>
                    <Text style = {auctionStartStyles.title}>Hours: {timeRemaining.hours}</Text>
                    <Text style = {auctionStartStyles.title}>Minutes: {timeRemaining.minutes}</Text>
                    <Text style = {auctionStartStyles.title}>Seconds: {timeRemaining.seconds}</Text>
                </View>
            </View>
            <View style = {{flex: 1}}>
                {/* <Text style = {auctionStartStyles.description}>Increment: ${auction.price_increment}</Text> */}
                <View style = {auctionStartStyles.logsContainer}>
                    <Text style = {auctionStartStyles.title}>Logs: 
                        <Text style = {auctionStartStyles.description}> {auction.logs}</Text>
                    </Text>
                </View>
            </View>
        </View>
    )
}

auctionStartStyles = StyleSheet.create({
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