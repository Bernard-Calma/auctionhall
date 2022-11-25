import { useEffect, useState } from "react"
import { StyleSheet, Text, View } from "react-native"
import { Database } from "../assets/others/links"

// Database
const backendURL = Database
const auctionRoute = "api/v1/auctions/"

export const AuctionStartCountDown = (props) => {
    
    // this is the countdown timer before auction starts
    let [countdown, setCountdown] = useState()
    // this shows a string value for the countdown timer
    const [showCountdown, setShowCountdown] = useState("")
    // bid countdown
    let [bidCountdown, setBidCountdown] = useState(5)
    // auction status 
    let auctionStart = false
    useEffect( () => {  
        const interval = setInterval(() => {
            let countdown = new Date(props.auction.auction_date).getTime() - new Date().getTime()
            let seconds = Math.floor(countdown/ 1000)
            let minutes = Math.floor(seconds / 60)
            let hours = Math.floor(minutes / 60)
            let days = Math.floor(hours / 24)
            setCountdown(countdown)
            setShowCountdown(`Hours: ${hours % 24} \nMinutes:${minutes % 60} \nSeconds:${seconds % 60}`)
            // console.log("Countdown on going", countdown)
            // console.log("AuctionStartCountDown: ", props.auctionStart)
            // console.log("BID COUNTDOWN", props.bidCountdown)
            // console.log("Countdown: ", countdown <= 0 && !props.auctionStart)
            // // Auction starts
            if (countdown <= 0 && !auctionStart) {
                console.log("Auction Starts!!!")
                auctionStart = true
            }
            else if (auctionStart){
                // console.log("Bid Countdown", bidCountdown)
                setBidCountdown(bidCountdown -= 1)
            }
            if (bidCountdown === 0){
                console.log("Auction Ends!!!")
                auctionStart = false
                props.setAuctionStart(false)
                clearInterval(interval)
            }

        },1000)
        // console.log("Get Countdown: ", countdown)
        return () => {
            clearInterval(interval);
        }
    }, []) 
    
    
    // console.log(countdown)
    return(
        <View style = {styles.container}>
            {
                bidCountdown >= 0?
                <>
                    <View>
                        <Text style = {props.styles.auctionCountdown}>Auction starts in:</Text>
                        <Text style = {props.styles.auctionCountdown}>{showCountdown}</Text>
                    </View>
                    <View>
                        <Text style = {props.styles.auctionCountdown}>Countdown: </Text>
                        <Text style = {props.styles.auctionCountdown}>Minutes: 0</Text>
                        <Text style = {props.styles.auctionCountdown}>Seconds: {bidCountdown}</Text>
                    </View>
                    
                </>
                :
                <View>
                    <Text style = {props.styles.auctionCountdown}>Auction Ended</Text>
                </View>
                
            }     
        </View>
    )
}

styles = StyleSheet.create({
    container: {
        // borderWidth: 1,
        margin: 5,
        flexDirection: "row",
        justifyContent: "space-between"
    }
})