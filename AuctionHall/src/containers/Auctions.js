import { useCallback, useEffect, useState } from "react"
import { View, Text, StyleSheet } from "react-native"

import { AuctionPreview } from "../components/AuctionPreview"

const backendURL = "https://auctionhall-back-end.herokuapp.com/"
const auctionRoute = "api/v1/auctions/"

export const Auctions = () => {

    const [auctions, setAuctions] = useState({})

    const getAuctions = useCallback(() => {
        // console.log(`${backendURL}${auctionRoute}`)
        fetch(`${backendURL}${auctionRoute}`)
        .then(response => response.json())
        .then(data => {
            setAuctions(data.data)
        })
        .catch(err => console.error(err))
    }, [auctions])

    useEffect(() => {
        getAuctions()
    }, [])
    // console.log("AUCTIONS: ", auctions)
    // console.log("LENGTH: ", auctions.length)
    return(
        <View style = {styles.container}>
            {
                auctions.length !== undefined ?
                <>{
                    auctions.map((auction, index) => {
                        // {console.log("DESCRIPTION: ", auction.description)}
                        return(
                            <AuctionPreview 
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