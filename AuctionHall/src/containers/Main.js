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
import { AuctionStart } from "./AuctionStart"

// ENV
import { API_URL} from "@env"
// Database
const backendURL = API_URL
const auctionRoute = "api/v1/auctions/"

export const Main = (props) => {
    const [auctions, setAuctions] = useState([])
    const [auction, setAuction] = useState({})
    const [view, setView] = useState("main")
    const getAuctions = useCallback(() => {
        console.log("getAuctions called")
        // console.log(`${backendURL}${auctionRoute}`)
        fetch(`${backendURL}${auctionRoute}`, {
            include: "credentials"
        })
        .then(response => {
            return response.json()
        })
        .then(data => {
            // console.log("DATA: " , data)
            setAuctions(data.data)
        })
        .catch(err => console.error("ERROR: ", err))
    }, [auctions])
    useEffect(() => {
        getAuctions()
    }, [])
    // console.log("AUCTIONS: ", auctions)
    // console.log("LENGTH: ", auctions.length)

    const handleChangeView = (event) => {
        getAuctions()
      // console.log("TARGET INST: ", event._targetInst.memoizedProps.title)
      if (!event._targetInst.memoizedProps.title){
        setView("main")
      } else {
        setView(event._targetInst.memoizedProps.title)
      }
      console.log("View changed to : ", event._targetInst.memoizedProps.title)
      
    }

    const handleShowAuction = (auction) => {
        // console.log("TARGET: ", auction)
        setAuction(auction)
        setView("showAuction")
    }

    const reloadAuction = (newAuction) => {
        // console.log("reloadAuctions called", newAuction)
        setAuction(newAuction)
    }

    // console.log("Auction DATE: ", new Date(auction.auction_date).getDay())
    // console.log("DATE TODAY: ", new Date().getDay())
    // console.log("AUCTION: ", new Date(auction.auction_date).getDay()=== new Date().getDay())
    // console.log("USER: ",props.user.user)
    // console.log("AUCTION DATE TIME: "+ auction.id + ": "+ new Date(auction?.auction_date).getTime())
    // console.log("DATE NOW: " ,new Date().getTime())
    // console.log("DATE COMPARISSON: ", new Date().getTime() < new Date(auction?.auction_date).getTime())
    return (
        <SafeAreaView style = {styles.mainContainer}>
            <SearchBar style = {styles.searchBar}/>
            {/* <TopNavBar 
                style = { styles.topNavBar }
                handleChangeView = {handleChangeView}
            /> */}
            <ScrollView 
                contentContainerStyle = {{flexGrow: 1}}
                keyboardShouldPersistTaps = 'never'
            >
            { view === "main" ?
                <Auctions
                    user = {props.user}
                    auctions = {auctions}
                    handleShowAuction = {handleShowAuction}
                    getAuctions = {getAuctions}
                />
            : view === "Add Auction" ?
                <AddAuction
                    user = {props}
                    setView = {setView}
                    getAuctions = {getAuctions}
                /> 
            : view === "showAuction" ?
            new Date().getTime() < new Date(auction?.auction_date).getTime() && (auction.participants.includes(props.user.user.id) || props.user.user.id === auction.user.id)?
                    <AuctionStart 
                        reloadAuction = {reloadAuction}
                        user = {props.user.user}
                        auction = { auction }
                        setView = {setView}
                    />
                :
                    <ShowAuction 
                        reloadAuction = {reloadAuction}
                        user = {props.user.user}
                        auction = { auction }
                        setView = {setView}
                        styles = {styles}
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
                    setUser = {props.setUser}
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
                getAuctions = {() => getAuctions}
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
    },
    image: {
        flex: 1,
    },
    imageContainer: {
        // borderWidth: 1,
        // borderColor: 'blue',
        flex: 1,
        // background color until image is implemented
        backgroundColor: "gray"
    },
})