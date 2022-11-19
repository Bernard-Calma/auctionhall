import React, { useState } from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";

import { Textbox } from "../components/Textbox";
import { LoginButton } from "../components/buttons/LoginButton";

// Database
// const backendURL = "https://auctionhall-back-end.herokuapp.com/"
// Database Development
const backendURL = "http://localhost:8000/"

const userRoute = "/api/v1/auctions/users"
export const SignUp = () => {
    const [user, setUser] = useState({
        username: null,
        email: null,
        password: null,
        passwordCheck: null,
        message: null,
    })

    const handleChange = (e) => {
        // GRABED THE VALUE FROM TARGET AND CHECKED HOW TO GET NAME AND VALUE, UPDATE THIS CODE TO A BETTER ONE.
        target = e.target._internalFiberInstanceHandleDEV.memoizedProps
        value = e.nativeEvent.text
        // console.log(e.target._internalFiberInstanceHandleDEV.memoizedProps)
        // console.log(e.nativeEvent)
        setUser({...user, [target.name]: value})
    }
    const handleSignUp = (e) => {
        // console.log("Clicked", user)
        if (!user.email || !user.username || !user.password || !user.passwordCheck) {
            setUser({...user, "message": "Please fill up all fields"})
        } else if (user.password.length < 9) {
            setUser({...user, "message": "Password should be at least 9 characters", "password": "", "passwordCheck": ""}) 
        } else if (user.password !== user.passwordCheck) {
            setUser({...user, "message": "Password should match"})    
        } else {
            
            // console.log(`${backendURL}${userRoute}/login`, "URL")
            fetch(`${backendURL}${userRoute}/register`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                credentials: "include",
                body: JSON.stringify({
                    email: user.email,
                    username: user.username,
                    password: user.password
                })
            })
            .then(response => response.json())
            .then(data => {
                // console.log(user.email, "user email")
                setUser({...user, "message":data.status.message})
                // console.log("Status Code: ", data.status.code)
                
                // props.setUser()
            })
        }
        
    }
    // console.log("Sign up")
    return(
        <View style={styles.container}>
            <Textbox 
                    handleChange = {handleChange}
                    user = {user}
                    name = "username"
                    required
                    />
                <Textbox 
                    handleChange = {handleChange}
                    user = {user}
                    name = "email"
                    required
                    />
                <Textbox 
                    handleChange = {handleChange}
                    user = {user}
                    name = "password"
                    value = {user['password']}
                    secureTextEntry = {true}
                    />
                <Textbox 
                    handleChange = {handleChange}
                    user = {user}
                    name = "passwordCheck"
                    value = {user['passwordCheck']}
                    secureTextEntry = {true}
                    />        
                <Text style={{margin: "auto", textAlign: "center",marginBottom: 50}}>{user.message}</Text>
                <LoginButton 
                    text = "Sign Up"
                    handleSubmit = {handleSignUp}
                />

            {/* <Text>{user.email}</Text>
            <Text>{user.password}</Text> */}
          </View>
    
    )
}
    
const styles = StyleSheet.create({
    container: {
        // borderColor: 'red',
        // borderWidth: 1,
        flex: 1,
        alignContent: 'center',
    },
    footer: {
        marginTop: "auto",
        marginBottom: 50,
    },
    signUp: {
        color: "gray",
        fontSize: 20,
        fontWeight: "200"
    }
})