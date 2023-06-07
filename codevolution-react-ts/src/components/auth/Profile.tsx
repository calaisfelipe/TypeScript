import { Login } from "./Login"

type PropsType = {
    isLoggedIn: boolean
    Component: React.ComponentType
}

export const Profile = ({isLoggedIn , Component}: PropsType) => {
 
    if(isLoggedIn){
        return <Component />
    } else {
        return <Login />
    }

}
