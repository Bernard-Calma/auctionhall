import { Text, View } from "react-native"

// ENV
import { API_URL} from "@env"
// Database
const backendURL = API_URL
const auctionRoute = "api/v1/auctions/start/"

export const RaiseBid = (props) => {
    const handleRaiseBid = () => {
        // console.log("Bid Raised by: " , props.user.id)
        // console.log("Running Price: ", props.auction.price + 10)
        sendRaiseBid()   
    }

    const sendRaiseBid = () => {
        fetch(`${backendURL}${auctionRoute}${props.auction.id}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include",
            body: JSON.stringify({
                price: props.auction.price + props.auction.price_increment,
                winner: props.user.id,
                logs: `${props.auction.logs}\nUser ${props.user.id}:  increased the bid by ${props.auction.price_increment}`
            })
        }).then(res => res.json())
        .then(data => props.reloadAuction(data.data))
        .catch(err => console.error("ERROR: ", err))
    }
    if (props.auction.winner) 
    return(
        <>
            {
                (props.auction.winner.id === props.user.id)?
                <>
                </>
                :
                <>
                    <Text style = {
                        {
                            borderWidth: 1,
                            borderRadius: 20,
                            fontSize: 50,
                            textAlign: "center",
                            backgroundColor: "gray",
                            overflow: "hidden"
                        }}
                        onPress = {() => handleRaiseBid()}    
                    >$</Text>
                </>
            }
        </>
    )
    else return <Text style = {
        {
            borderWidth: 1,
            borderRadius: 20,
            fontSize: 50,
            textAlign: "center",
            backgroundColor: "gray",
            overflow: "hidden"
        }}
        onPress = {() => handleRaiseBid()}    
    >$</Text>

}