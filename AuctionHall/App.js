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

  const [view, setView] = useState("main")
  const handlePress = (event) => {
    // console.log("TARGET INST: ", event._targetInst.memoizedProps.title)
    if (!event._targetInst.memoizedProps.title){
      setView("main")
    } else {
      setView(event._targetInst.memoizedProps.title)
    }
  }

  const handleSignUp = () => {
    setUser({...user, "signUp": !user.signUp})
    console.log(user)
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
            view = {view}
            handlePress = {handlePress}
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