import React from "react"
import { Text, StyleSheet } from "react-native"

export const Title = () => {
    return(
        <Text style={styles.titleComponent}>Auction Hall</Text>
    )
}

const styles = StyleSheet.create({
    titleComponent: {
        width: "100%",
        fontSize: 50,
        fontFamily: "courier",
        textAlign: "center",
        marginTop: "40%",
    }
})