

type ItemsType = {
    items: string[]
}


export const List = ({items}: ItemsType) => {
  return (

   <ul>

        {items.map((item) =>{
            <li>{item}</li>
        })}



   </ul>
  )
}
