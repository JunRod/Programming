import { useContext } from "react"
import { UserContext } from "./Context/UserContext"

export const LoginPage = () => {

  const {User} = useContext(UserContext)

  return (
    <h1>LoginPage {User?.name}</h1>
  )
}
