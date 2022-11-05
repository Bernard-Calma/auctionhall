import React from "react"
import { View, Text, StyleSheet, } from "react-native"
import { BottomNavBar } from "../components/BottomNavBar"

import { SearchBar } from "../components/SearchBar"
import { TopNavBar } from "../components/TopNavBar"

export const Main = (props) => {
    // console.log("Props :", props)
    return(
        <View style = {styles.mainContainer}>
            {/* Search Bar */}
            <SearchBar />
            <TopNavBar style = { styles.topNavBar }/>
            <View style = {styles.photosContainer}>
                {/* List of all auction photos */}
                <Text>Photos</Text>
            </View>
            <BottomNavBar/>
        </View>
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