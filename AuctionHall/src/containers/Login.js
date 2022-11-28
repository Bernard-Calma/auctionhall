import React, { useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    KeyboardAvoidingView,
    ScrollView
} from "react-native";

import { Textbox } from "../components/Textbox";
import { LoginButton } from "../components/buttons/LoginButton";
import { LoginFooter } from "./LoginFooter";
import { SignUp } from "./SignUp";

// ENV
import { API_URL} from "@env"
// Database
const backendURL = API_URL
const userRoute = "api/v1/auctions/users"
export const Login = (props) => {
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
        // console.log(`${backendURL}${userRoute}/login`, "URL")
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
            // console.log("Status Code: ", data.status.code)
            
            if (data.status.code === 200) {
                props.setUser({
                    user: data.data,
                    loggedIn: true,
                })
            }
            setUser({...user, "message":data.status.message})
            // console.log(data)
        })
        .catch(err => console.error("ERROR: ", err))
    }
    return(
            <View style={styles.loginContainer}>
                <Text style={styles.title}>Auction Hall</Text>
                {
                    !props.user.signUp?
                    <View style = {styles.inputContainer}>
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
                        <View>
                            <Text style={{textAlign: "center"}}>{user.message}</Text>
                            <LoginButton 
                                text = "Login"
                                handleSubmit = {handleLogin}
                            />
                        </View>    
                    </View>
                    :
                    <>
                        <SignUp handleSignUp = {props.handleSignUp}/>
                    </>
                }        
            
                < LoginFooter
                    handleSignUp = {props.handleSignUp} 
                    user = {props.user}
                />  
            </View>
    )  
}
    
const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        // borderColor: 'green',
        // borderWidth: 1,
        alignContent: 'center',
        margin: 10,
        justifyContent: "flex-start" 
    },
    loginContainer: {
        flex: 1,
        borderColor: 'blue',
        borderWidth: 1,
    },
    signUp: {
        color: "gray",
        fontSize: 20,
        fontWeight: "200"
    },
    title: {
        // borderColor: "blue",
        // borderWidth: 1,
        flex: .1,
        fontSize: 50,
        fontFamily: "courier",
        textAlign: 'center',
        paddingTop: 20,
    },
})