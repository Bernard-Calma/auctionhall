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
import { MyAuctions } from "./MyAuctions"
import { ShowAuction } from "./ShowAuction"
import { Profile } from "./Profile"

// Database
// const backendURL = "https://auctionhall-back-end.herokuapp.com/"
// Database Development
const backendURL = "http://localhost:8000/"

const auctionRoute = "api/v1/auctions/"


export const Main = (props) => {
    const [auctions, setAuctions] = useState([])
    const [auction, setAuction] = useState({})
    const [view, setView] = useState("main")

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

    const handleChangeView = (event) => {
      // console.log("TARGET INST: ", event._targetInst.memoizedProps.title)
      if (!event._targetInst.memoizedProps.title){
        setView("main")
      } else {
        setView(event._targetInst.memoizedProps.title)
      }
    }

    const handleShowAuction = (auction) => {
        // console.log("TARGET: ", auction)
        setAuction(auction)
        setView("showAuction")
    }

    return (
        <SafeAreaView style = {styles.mainContainer}>
            <SearchBar style = {styles.searchBar}/>
            <TopNavBar 
                style = { styles.topNavBar }
                handleChangeView = {handleChangeView}
            />
            <ScrollView 
                contentContainerStyle = {{flexGrow: 1}}
                keyboardShouldPersistTaps = 'never'
            >
            { view === "main" ?
                <Auctions
                    user = {props.user}
                    auctions = {auctions}
                    handleShowAuction = {handleShowAuction}
                />
            : view === "Add Auction" ?
                <AddAuction
                    user = {props}
                /> 
            : view === "showAuction" ?
                <ShowAuction 
                    user = {props.user.user}
                    auction = { auction }
                />
            : view === "myAuctions" ?
                <MyAuctions 
                    user = {props.user.user}
                    auctions = { auctions }
                    handleShowAuction = {handleShowAuction}
                    getAuctions = {getAuctions}
                />
            : view === "profile" ?
                <Profile 
                    user = {props.user}
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
                handleChangeView = {handleChangeView}
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