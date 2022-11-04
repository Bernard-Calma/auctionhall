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
        console.log("Clicked", user)
        if (!user.email || !user.username || !user.password || !user.passwordCheck) {
            setUser({...user, "message": "Please fill up all fields"})
        } else if (user.password !== user.passwordCheck) {
            setUser({...user, "message": "Password should match"})    
        } else if (user.password.length < 9) {
            setUser({...user, "message": "Password should be at least 9 characters"})    
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
                console.log("Status Code: ", data.status.code)
                
                // props.setUser()
            })
        }
        
    }
    // console.log("Sign up")
    return(
        <View style={styles.headersContainer}>
            <Title style = {styles.title}/>
            <View>
            <Textbox 
                    style = {styles.inputBox}
                    handleChange = {handleChange}
                    user = {user}
                    name = "username"
                    required
                    />
                <Textbox 
                    style = {styles.inputBox}
                    handleChange = {handleChange}
                    user = {user}
                    name = "email"
                    required
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
                    handleSubmit = {handleSignUp}
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