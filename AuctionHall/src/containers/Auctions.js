import { View, Text, StyleSheet, Pressable } from "react-native"

import { AuctionPreview } from "../components/AuctionPreview"

export const Auctions = (props) => {
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
        justifyContent: "space-around"
        },
    pressableContainer: {
            margin: 1,
            width: "24%",
            height: "20%",
            // Background Color for now until pictures are added.
            backgroundColor: "gray",
    }
})