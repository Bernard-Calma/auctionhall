import React, { useState } from "react"
import { Login } from "./src/containers/Login"

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
  return (
    <Login 
      handleSignUp = {handleSignUp}
      user = {user}
      />
  )
}

export default App