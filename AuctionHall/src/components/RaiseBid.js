import { Text, View } from "react-native"
import { Database } from "../assets/others/links"

// Database
const backendURL = Database
const auctionRoute = "api/v1/auctions/start/"

export const RaiseBid = (props) => {
    const handleRaiseBid = () => {
        console.log("Bid Raised by: " , props.user.id)
        console.log("Running Price: ", props.auction.price + 10)
        sendRaiseBid()
    }

    const sendRaiseBid = () => {
        fetch(`${backendURL}${auctionRoute}${props.auction.id}`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include",
            body: JSON.stringify({price: props.auction.price + 10})
        }).then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.error("ERROR: ", err))
    }



    return(
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
    )

}