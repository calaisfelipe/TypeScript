import { createContext , useState} from "react";


export type AuthUser = {
    name: string
    email: string
}

type UserContextTypeProp = {
    children: React.ReactNode
}

type UserContextType = {
    user: AuthUser | null
    setUser: React.Dispatch<React.SetStateAction<AuthUser | null>>
}

export const UserContext = createContext<UserContextType | null>({} as UserContextType)

export const UserContextProvider = ({children}:UserContextTypeProp) =>{
    const [user, setUser] = useState<AuthUser | null>({name:'felipe', email:'teste'})
 
    return (
        <UserContext.Provider  value={{user, setUser}}>
            {children}

        </UserContext.Provider>    




    )

}




