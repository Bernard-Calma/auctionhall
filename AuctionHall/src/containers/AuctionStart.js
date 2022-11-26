import { StyleSheet, Text, View } from "react-native"
import {ImagePreview} from "../components/ImagePreview"
import { RaiseBid } from "../components/RaiseBid"
import { AuctionDetails } from "./AuctionDetails"

export const AuctionStart = (props) => {
    // console.log("PROPS", props)
    return (
        <View style={styles.container}>
            <Text>Auction Start</Text>
            <View style={styles.imageContainer}>
                < ImagePreview
                    style = {styles.image}
                    uri={props.auction.photo}
                />
                
            </View>
            <AuctionDetails 
                auction = {props.auction}
                reloadAuction = {props.reloadAuction}
            />
            <View style = {styles.raiseBid}>
                {
                    !(props.user.id === props.auction.user.id) ?
                    <>
                        <RaiseBid 
                            reloadAuction = {props.reloadAuction}
                            user = {props.user}
                            auction = {props.auction}
                        />
                    </>  
                    :
                    <>
                    </>
                }
                
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        // borderWidth: 1,
        // borderColor: 'red',
        flex: 1,
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
})
