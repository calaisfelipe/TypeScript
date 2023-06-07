import { useContext } from "react"

import { ThemeContext } from "./ThemeContext"

export const Box = () => {
    const theme = useContext(ThemeContext)
    

  return (
    <>

    <div style={{backgroundColor: theme.primary.main}}>Theme primary context</div>
    <div style={{backgroundColor: theme.secondary.main}}>Theme secondary context</div>
  
    </>
  )
}
