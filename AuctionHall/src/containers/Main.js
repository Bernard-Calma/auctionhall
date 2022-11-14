import React from "react"
import { useState, useCallback, useEffect } from "react"
import { SafeAreaView, View, Text, StyleSheet } from "react-native"
import { ScrollView } from "react-native-gesture-handler"
import { BottomNavBar } from "../components/BottomNavBar"

import { SearchBar } from "../components/SearchBar"
import { TopNavBar } from "../components/TopNavBar"

// Containers
import {AddAuction} from "./AddAuction"
import { Auctions } from "./Auctions"

// Database
const backendURL = "https://auctionhall-back-end.herokuapp.com/"
const auctionRoute = "api/v1/auctions/"


export const Main = (props) => {
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

    return (
        <SafeAreaView style = {styles.mainContainer}>
            <SearchBar style = {styles.searchBar}/>
            <TopNavBar 
                style = { styles.topNavBar }
                handlePress = {props.handlePress}
            />
            <ScrollView 
                contentContainerStyle = {{flexGrow: 1}}
                keyboardShouldPersistTaps = 'never'
            >
            { props.view === "main" ?
                <Auctions auctions = {auctions}/>
            : props.view === "Add Auction" ?
                <AddAuction 
                    handlePress = {props.handlePress}
                /> 
            :
            <>
                <View style = {styles.photosContainer}>
                    {/* List of all auction photos */}
                    <Text>Still Under Construction</Text>
                </View>
            </>
            }
            </ScrollView>
            <BottomNavBar
                handlePress = {props.handlePress}
            />  
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: 'space-between',
        // borderColor: "blue",
        // borderWidth: 1,
    },
    searchBar: {
        margin: 5,
    },
    topNavBar: {
        borderWidth: 1,
        height: '10%',
    },
    bottomNavBar: {
        height: '10%',
        marginBottom: 30,
        borderWidth: 1,
    }
})