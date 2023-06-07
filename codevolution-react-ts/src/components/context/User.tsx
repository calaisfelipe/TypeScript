import { useContext, useState } from "react"
import { UserContext } from "./UserContext"

export const User = () =>{
    const [validation, setValidation] = useState<boolean>(false)

    const confirmUser = useContext(UserContext)


    const handleLogin = () =>{
        if(validation === true) return

        confirmUser?.setUser({name:'teste', email:'teste2'})
        setValidation(true)
    }
    const handleLogOut = () =>{
        if(confirmUser === null) return

        confirmUser.setUser(null)
        setValidation(false)

    }

    return(
        <div>
            <button onClick={handleLogin} disabled={validation}>Login</button>
            <button onClick={handleLogOut} disabled={!validation}>Logout</button>
            <div>User name is: {confirmUser?.user?.name}</div>
            <div>User email is: {confirmUser?.user?.email}</div>



        </div>




    )







}