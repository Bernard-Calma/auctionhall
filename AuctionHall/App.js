import React, { useState } from "react"
import { Platform, SafeAreaView, StyleSheet, useWindowDimensions, View } from "react-native"
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
    </SafeAreaView>
  )
}

const useStyle = () => {
  const { width } = useWindowDimensions()
  console.log(" DEVICE WIDTH: ", width)

  const styles = StyleSheet.create({
    container: {
      borderColor: 'red',
      borderWidth: 5,
      flex: 1,
      marginTop: Platform.OS === 'ios' && width > 400 ? 50: 0
    }
  })

  return { styles }
}

export default App