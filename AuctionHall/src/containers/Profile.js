import { useState } from "react"
import { Button, StyleSheet, Text, TextInput, View } from "react-native"
import { Database } from "../assets/others/links"

// Database
const backendURL = Database
const auctionRoute = "api/v1/auctions/users/"

export const Profile = (props) => {
    const [editProfile, setEditProfile] = useState(false)
    const [username, setusername] = useState("")
    // console.log(props)
    // console.log(`${backendURL}${auctionRoute}${props.user.user.id}`)

    const handleSubmitUserUpdate = () => {
        console.log(username)
        fetch(`${backendURL}${auctionRoute}${props.user.user.id}`, {
            method: "POST",
            credentials: "include",
            body: JSON.stringify({username: username}),
            headers: {
                "Content-Type": "application/json"
            },
        }).then(response => response.json())
        .then(data => {
                // console.log("User :" , props.user)
                // console.log("Data: ", {user: data.data})
                props.setUser({...props.user, user: data.data})}
            )
    }

    return (
        <View style = {styles.container}>
            <View>
            {
                !editProfile?
                <>
                    <Text style = {styles.text} >Username: {props.user.user.username}</Text>
                    <Text style = {styles.text} >Email Address: {props.user.user.email}</Text>
                    <Button 
                        onPress={() => setEditProfile(!editProfile)}
                        title="Edit Profile"
                    />
                </>
                :
                <>
                    <View style = {styles.textInputContainer}>
                        <Text style = {styles.text} >Username: </Text>
                        <TextInput
                            style = {styles.TextInput}
                            defaultValue = {props.user.user.username} 
                            onChangeText = {text => setusername(text)}
                        />
                    </View>
                    <Button 
                        onPress={() => {
                            setEditProfile(!editProfile)
                            handleSubmitUserUpdate()
                        }}
                        title="Submit Change"
                    />
                </>
            }
            </View>
            
        </View>
    )
    
}


const styles = StyleSheet.create({
    container: {
        // borderWidth: 1,
        // borderColor: "red",
        flex: 1,
    },
    text: {
        fontSize: 20,
        fontFamily: "copperplate",
        margin: 10
    },
    TextInput:{
        borderWidth: 1,
        borderRadius: 20,
        flex: 1,
        padding: 10,
        marginRight: 5,
    },
    textInputContainer: {
        flexDirection: "row",
        margin: 5,
       
    }
    
})