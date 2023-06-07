

type ButtonType ={
    handleClick: (e: React.MouseEvent<HTMLButtonElement>, id: number ) => void
}

export const Button = ({handleClick} : ButtonType) => {
  return (
    <button onClick={(e) => {handleClick(e, 1)}}>Click</button>
    )}