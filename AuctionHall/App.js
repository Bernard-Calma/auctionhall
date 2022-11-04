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
  if (!user.loggedIn) {
    return (
      <Login 
        handleSignUp = {handleSignUp}
        user = {user}
        setUser = {setUser}
        />
    )
  } else {
    
  }

}

export default App