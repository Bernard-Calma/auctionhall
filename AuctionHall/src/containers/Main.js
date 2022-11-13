import React from "react"
import { SafeAreaView, View, Text, StyleSheet, } from "react-native"
import { ScrollView } from "react-native-gesture-handler"
import { BottomNavBar } from "../components/BottomNavBar"

import { SearchBar } from "../components/SearchBar"
import { TopNavBar } from "../components/TopNavBar"

// Containers
import {AddAuction} from "./AddAuction"
import { Auctions } from "./Auctions"

export const Main = (props) => {
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
                <Auctions />
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