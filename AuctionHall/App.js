import React, { useState } from "react"
import { KeyboardAvoidingView, Platform, SafeAreaView, StyleSheet, useWindowDimensions, View } from "react-native"
import { ScrollView } from "react-native-gesture-handler"
import { Login } from "./src/containers/Login"
import { Main } from "./src/containers/Main"



const App = () => {
  const { styles } = useStyle()

  const [user, setUser] = useState({
    user: {},
    loggedIn: false,
    signUp: false,
  })

  const handleSignUp = () => {
    setUser({...user, "signUp": !user.signUp})
    // console.log(user)
  }

  return (
    <SafeAreaView style = {styles.container}>
      <KeyboardAvoidingView style ={{flex: 1}}>
        <ScrollView contentContainerStyle = {{flexGrow: 1}}>
        { !user.loggedIn ?
            <Login 
              handleSignUp = {handleSignUp}
              user = {user}
              setUser = {setUser}
            />
          :
            <Main 
              user = {user}
              setUser = {setUser}
            />
        }
        </ScrollView>
      </KeyboardAvoidingView >
    </SafeAreaView>
  )
}

const useStyle = () => {
  const { width } = useWindowDimensions()
  console.log(" DEVICE WIDTH: ", width)

  const styles = StyleSheet.create({
    container: {
      // borderColor: 'red',
      // borderWidth: 1,
      flexGrow: 1,
      marginTop: Platform.OS === 'ios' && width > 400 ? 50: 0,
      marginBottom: Platform.OS === 'ios' && width > 400 ? 20: 0
    }
  })

  return { styles }
}

export default App