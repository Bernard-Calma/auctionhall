import { useState } from "react"
import { Button, StyleSheet, Text, TextInput, View } from "react-native"


export const Profile = (props) => {
    const [editProfile, setEditProfile] = useState(false)
    console.log(editProfile)
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
                        />
                    </View>
                    <View style = {styles.textInputContainer}>
                        <Text style = {styles.text} >Email Address:: </Text>
                        <TextInput
                            style = {styles.TextInput}
                            defaultValue = {props.user.user.email} 
                        />

   
                    </View>
                    <Button 
                        onPress={() => setEditProfile(!editProfile)}
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