import { useEffect } from "react"
import { View, Dimensions, StyleSheet, Pressable } from "react-native"

import { AuctionPreview } from "../components/AuctionPreview"

export const Auctions = (props) => {
    useEffect(()=>{
        props.reloadAuctions
    })
    return(
        <View style = {styles.container}>
            {
                props.auctions.length !== undefined ?
                <>{
                    props.auctions.map((auction, index) => {
                        // {console.log("DESCRIPTION: ", auction.description)}
                        return(
                            <Pressable 
                                key = {index}
                                style = {styles.pressableContainer}
                                onPress = {() => props.handleShowAuction(auction)}
                            >
                                <AuctionPreview 
                                    handleShowAuction = { props.handleShowAuction } 
                                    auction = {auction}
                                />
                            </Pressable>
                        )
                    })
                }</>
                :
                <>
                </>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexWrap: "wrap",
        marginTop: 10,
        marginBottom: 10,   
        flexDirection: 'row',
        },
    pressableContainer: {
        borderWidth: 1,
        margin: 2,
        width: Dimensions.get("window").width / 4.2,
        height: Dimensions.get("window").height / 5.7,
        // Background Color for now until pictures are added.
        backgroundColor: "gray",
    }
})