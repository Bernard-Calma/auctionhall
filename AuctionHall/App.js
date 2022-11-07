import React, { useState } from "react"
import { SafeAreaView, StyleSheet, StatusBar } from "react-native"
import { Login } from "./src/containers/Login"
import { Main } from "./src/containers/Main"

const App = () => {
  const [user, setUser] = useState({
    user: undefined,
    loggedIn: false,
    signUp: false,
  })

  const handleSignUp = () => {
    setUser({...user, "signUp": !user.signUp})
    console.log(user)
  }
  if (!user.loggedIn) {
    return (
      <SafeAreaView style = {styles.safeAreaView}>
        <Login 
          handleSignUp = {handleSignUp}
          user = {user}
          setUser = {setUser}
        />
      </SafeAreaView>
    )
  } else {
    return (
      <SafeAreaView style = {styles.safeAreaView}>
        <Main 
          user = {user}
        />
      </SafeAreaView>

    )
  }

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
    marginTop: 50
  },
})

export default App