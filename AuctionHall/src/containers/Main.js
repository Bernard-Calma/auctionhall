import React from "react"
import { SafeAreaView, View, Text, StyleSheet, } from "react-native"
import { ScrollView } from "react-native-gesture-handler"
import { BottomNavBar } from "../components/BottomNavBar"

import { SearchBar } from "../components/SearchBar"
import { TopNavBar } from "../components/TopNavBar"

// Containers
import {AddAuction} from "../containers/AddAuction"

export const Main = (props) => {
    // console.log(props.view)
    // console.log("Props :", props)
    if (props.view === "main") return(
        <SafeAreaView style = {styles.mainContainer}>
            {/* Search Bar */}
            <SearchBar style = {styles.searchBar}/>
            <TopNavBar 
                style = { styles.topNavBar }
                handlePress = {props.handlePress}
                />
            <View style = {styles.photosContainer}>
                {/* List of all auction photos */}
                <Text>{props.view}</Text>
            </View>
            <BottomNavBar
                handlePress = {props.handlePress}
            />
        </SafeAreaView>
    )
    else if (props.view === "Add Auction") return (
        <ScrollView 
            contentContainerStyle = {{flex: 1}}
            keyboardShouldPersistTaps = 'never'
        >
            <AddAuction 
                handlePress = {props.handlePress}
            />
        </ScrollView>

    )
}

const styles = StyleSheet.create({
    mainContainer: {
        display: "flex",
        width: '100%',
        height: '90%',
        justifyContent: 'space-between',
        marginTop: 60,
    },
    searchBar: {
        margin: 5,
    },
    topNavBar: {
        marginTop: 0,
        borderWidth: 1,
        marginBottom: 0,
        height: '10%',
    },
    photosContainer: {
        height: '75%',
        marginTop: 0,
        borderWidth: 1,
    },
    bottomNavBar: {
        height: '10%',
        marginBottom: 30,
        borderWidth: 1,
        marginTop: 0,
    }
})