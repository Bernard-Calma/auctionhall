import React, { useState } from "react"
import { SafeAreaView, StyleSheet, StatusBar } from "react-native"
import { Login } from "./src/containers/Login"
import { Main } from "./src/containers/Main"

const App = () => {
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
    <SafeAreaView style = {styles.safeAreaView}>
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

const styles = StyleSheet.create({
  login: {
    borderColor: 'red',
    borderWidth: 1,
  },
  safeAreaView: {
    // borderColor: 'red',
    // borderWidth: 1,
    flex: 1,
    marginTop: 35
  },
})

export default App