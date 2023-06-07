
type propsType = {
    name:string,
    msgCount: number,
    isLoggedIn: boolean 
}

export const Greet = ({name, msgCount, isLoggedIn = false}:propsType ) => {

  return (
    <div>Welcome {name}! You have {msgCount} unread messages. {isLoggedIn ? 'LogOut' : 'Please Log in'}</div>
  )
}

export const Hello = (props:propsType) => {
  return (
    <div>Hello {props.name}, You have {props.msgCount} unread messages</div>
  )
}

