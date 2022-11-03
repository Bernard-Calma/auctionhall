import React, { useState } from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";

import { Title } from "../components/Title";
import { Textbox } from "../components/Textbox";
import { LoginButton } from "../components/buttons/LoginButton";

const backendURL = "http://localhost:8000"
const userRoute = "/api/v1/auctions/users"
export const SignUp = () => {
    const [user, setUser] = useState({
        email: "email",
        password: "password",
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

    const handleLogin = (e) => {
        // console.log("Clicked", user)
        console.log(`${backendURL}${userRoute}/login`, "URL")
        fetch(`${backendURL}${userRoute}/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include",
            body: JSON.stringify({
                email: user.email,
                password: user.password
            })
        })
        .then(response => response.json())
        .then(data => {
            setUser({...user, "message":data.status.message})
            console.log(data)
        })
    }
    console.log("Sign up")
    return(
        <View style={styles.headersContainer}>
            <Title style = {styles.title}/>
            <View>
            <Textbox 
                    style = {styles.inputBox}
                    handleChange = {handleChange}
                    user = {user}
                    name = "username"
                    />
                <Textbox 
                    style = {styles.inputBox}
                    handleChange = {handleChange}
                    user = {user}
                    name = "email"
                    />
                <Textbox 
                    style = {styles.inputBox}
                    handleChange = {handleChange}
                    user = {user}
                    name = "password"
                    secureTextEntry = {true}
                    />
                <Textbox 
                    style = {styles.inputBox}
                    handleChange = {handleChange}
                    user = {user}
                    name = "passwordCheck"
                    secureTextEntry = {true}
                    />        
                <Text style={{margin: "auto", textAlign: "center",marginBottom: 50}}>{user.message}</Text>
                <LoginButton 
                    text = "Sign Up"
                    handleSubmit = {handleLogin}
                />
            </View>

            {/* <Text>{user.email}</Text>
            <Text>{user.password}</Text> */}
          </View>
    
    )
}
    
const styles = StyleSheet.create({
    headersContainer: {
        backgroundColor: "#FFFFFF",
        flex: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
    },
    inputBox: {
        width: 250,
        borderWidth: 1,
        height: 40,
        borderRadius: 10,
        padding: 10,
        margin: "5%",
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