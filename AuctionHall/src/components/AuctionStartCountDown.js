import { useEffect, useState } from "react"
import { Text, View } from "react-native"



export const AuctionStartCountDown = (props) => {
    const [countdown, setCountdown] = useState()
    const [showCountdown, setShowCountdown] = useState("")
    useEffect( () => {
        
        const interval = setInterval(() => {
            let countdown = new Date(props.auction.auction_date).getTime() - new Date().getTime()
            let seconds = Math.floor(countdown/ 1000)
            let minutes = Math.floor(seconds / 60)
            let hours = Math.floor(minutes / 60)
            let days = Math.floor(hours / 24)
            setCountdown(countdown)
            setShowCountdown(`Hours: ${hours % 24} \nMinutes:${minutes % 60} \nSeconds:${seconds % 60}`)
        },1000)
        // console.log("Get Countdown: ", countdown)
        return () => {
            clearInterval(interval);
        }
    }, []) 
    // console.log(countdown)
    return(
        <View>
            {
                countdown >= 0?
                <>
                    <Text style = {props.styles.auctionCountdown}>Auction starts in:</Text>
                    <Text style = {props.styles.auctionCountdown}>{showCountdown}</Text>
                </>
                :
                <>
                    <Text style = {props.styles.auctionCountdown}>Auction Ended</Text>
                </>
                
            }
            
        </View>
    )
}