import { Text, View } from "react-native"



export const AuctionStartCountDown = (props) => {
    const getCountdown = () => {
        let countdown = new Date(props.auction.auction_date).getTime() - new Date().getTime()
        let seconds = Math.floor(countdown/ 1000)
        let minutes = Math.floor(seconds / 60)
        let hours = Math.floor(minutes / 60)
        let days = Math.floor(hours / 24)
        countdown = `${hours % 24}:${minutes % 60}:${seconds % 60}`
        return countdown
    }    
    return(
        <View>
            <Text style = {props.styles.auctionCountdown}>{getCountdown()}</Text>
        </View>
    )
}