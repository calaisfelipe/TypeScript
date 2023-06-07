
type InputProps = {
    value: string,
    handleChange: (e: React.ChangeEvent<HTMLInputElement> | string) => void
}



export const Input = ({value, handleChange}:InputProps) => {

    const handleEvent = (e: React.ChangeEvent<HTMLInputElement>):void  => {
        handleChange(e.target.value)
    }

  return (
    <>
    <p>{value}</p>
    <input type='text' onChange={handleEvent}  value={value}/>
    </>
  )
}
