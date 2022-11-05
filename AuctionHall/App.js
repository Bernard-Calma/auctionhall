import React, { useState } from "react"
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
      <Login 
        handleSignUp = {handleSignUp}
        user = {user}
        setUser = {setUser}
        />
    )
  } else {
    return (
      <Main 
        user = {user}
      />
    )
  }

}

export default App