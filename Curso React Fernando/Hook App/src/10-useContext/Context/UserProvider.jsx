import { useState } from "react"
import {UserContext} from "./UserContext"

export const UserProvider = ({children}) => {

  const [User, setUser] = useState()

  return (
    <UserContext.Provider value={{User: User, setUser: setUser}}>
        {children}
    </UserContext.Provider>
  )
}
