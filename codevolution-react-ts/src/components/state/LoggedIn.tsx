
type LogginType = {
    status: boolean
    logger: (status:boolean) => void
}


export const LoggedIn = ({status,logger}: LogginType ) => {

    const handleLogIn = () =>{
        logger(true)
    }
    const handleLogOut = () =>{
        logger(false)
    }

  return (
    <div >
        <div>
        <button onClick={handleLogIn}>Log in</button>
        <button onClick={handleLogOut}>Log Out</button>
        </div>
        <div>{status ? 'User is logged in' : 'logged out'}</div>


    </div>
  )
}
