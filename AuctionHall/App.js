import React, { useState } from "react"
import { Login } from "./src/containers/Login"

const App = () => {
  const [user, setUser] = useState(undefined)
  return (
    <Login />
  )
}

export default App