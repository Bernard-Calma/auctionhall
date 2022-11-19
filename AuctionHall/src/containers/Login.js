import React, { useState } from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";

import { Textbox } from "../components/Textbox";
import { LoginButton } from "../components/buttons/LoginButton";
import { LoginFooter } from "./LoginFooter";
import { SignUp } from "./SignUp";

// Database
// const backendURL = "https://auctionhall-back-end.herokuapp.com/"
// Database Development
const backendURL = "http://localhost:8000/"

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
    }
    if (!props.user.signUp) {
        return(
            <View style={styles.loginContainer}>
                <Text style={styles.title}>Auction Hall</Text>
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
                    <View style = {styles.loginButtonContainer}>
                        <Text style={{textAlign: "center"}}>{user.message}</Text>
                        <LoginButton 
                            text = "Login"
                            handleSubmit = {handleLogin}
                        />
                    </View>    
                </View>
                < LoginFooter
                    handleSignUp = {props.handleSignUp} 
                    user = {props.user}
                />
              </View>
        )
    } else {
        return(
            <>
                <Text style={styles.title}>Auction Hall</Text>
                <SignUp handleSignUp = {props.handleSignUp}/>
                < LoginFooter
                    handleSignUp = {props.handleSignUp} 
                    styles = {StyleSheet.create({
                        footer: {
                            marginTop: 300,
                            marginBottom: 50,
                            marginLeft: 100,
                        },signUp: {
                            color: "gray",
                            fontSize: 20,
                            fontWeight: "200"
                        }
                    })}
                    user = {props.user}
                />
            </>

            
        )
    }
    
}
    
const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        // borderColor: 'green',
        // borderWidth: 1,
        alignContent: 'center',
    },
    footer: {
        borderWidth: 5,
        borderColor: 'black',
        marginLeft: 20,
    },
    loginContainer: {
        // borderColor: 'red',
        // borderWidth: 1,
        flex: 1,
        alignContent: 'center',
        justifyContent: "space-between"
    },
    signUp: {
        color: "gray",
        fontSize: 20,
        fontWeight: "200"
    },
    title: {
        // borderColor: "blue",
        // borderWidth: 1,
        flex: .3,
        fontSize: 50,
        fontFamily: "courier",
        textAlign: 'center',
        paddingTop: 100,
        marginBottom: -100,
    },
})