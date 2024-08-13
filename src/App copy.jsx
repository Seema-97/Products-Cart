
import { useState } from "react";
import One from "./components/One/One";
import Two from "./components/Two/Two";
import { AppContext, username } from "./contexts/contexts";





function App() {

  const [user, setUser] = useState("")
  return (

    <AppContext.Provider value={{
      username,
      user, setUser
    }}>
      <h1>Context API {user}</h1>
      <One />
      <Two />
    </AppContext.Provider>

  )
}

export default App
