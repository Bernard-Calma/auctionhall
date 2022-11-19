import { useCallback, useState } from "react"
import { StyleSheet, Text, View, Dimensions, Pressable, Alert, Image  } from "react-native"
import { Database } from "../assets/others/links"



// Database
const backendURL = Database
// Database Development
// const backendURL = "http://localhost:8000/"

const auctionRoute = "api/v1/auctions/"

export const UserAuction = (props) => {
    const [auction , setAuction] = useState(props.auction)
    const cancelAlert = () => {
        Alert.alert("Cancel", "Do you want to cancel this Auction?",
        [{
            text: "Cancel",
            onPress: () => console.log("Cancelled")
        },
        {
            text: "OK", onPress: ()=> cancelAuction()
        }])
    }

    const cancelAuction = useCallback(() => {
        // console.log(auction)
        // console.log(`${backendURL}${auctionRoute}`)
        fetch(`${backendURL}${auctionRoute}/${auction.id}`,{
            method: "DELETE",     
        })
        .then(response => response.json())
        .then(data => {
            props.getAuctions()
            if (data.status.code === 200) Alert.alert("Auction Cancelled.")
            
        })
        .catch(err => console.error(err))
    }, [auction])

    return(
        <View style = {styles.containter}>
            <Image
                style = {styles.photo}
                source={{uri: props.auction.photo}}
            />
            <View style = {styles.titleContainer}>
                <Text
                    style = {styles.font}
                >{props.auction.title}</Text>
                <Pressable
                    onPress={ () => cancelAlert()}
                >
                    <Text style = {styles.font}>Cancel</Text>
                </Pressable>
            </View>
            
            
        </View>
    )
}

const styles = StyleSheet.create({
    font:{
        fontFamily: "copperplate",
        fontWeight: "500",
        fontSize: 20,
        margin: 5,
    },
    containter: {
        // borderWidth: 1,
        // borderColor: 'blue',
        // Background color for now until picture is enabled
        backgroundColor: "gray",
        marginBottom: 5,
        height: Dimensions.get('window').height / 4.22,
        justifyContent: "flex-end"
    },
    photo: {
        flex: 1,
    },
    titleContainer: {
        flexDirection: "row",
        justifyContent: 'space-between'
    }
})