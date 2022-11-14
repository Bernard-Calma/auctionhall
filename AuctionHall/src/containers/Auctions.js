import { View, Text, StyleSheet } from "react-native"

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
                            <AuctionPreview 
                                key = {index}
                                auction = {auction}
                            />
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
})