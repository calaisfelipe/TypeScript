import {Stack, Typography, Button} from '@mui/material'
import { useContext } from 'react'

import CartContext from '../context/CartProvider'

//import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


type CartPropsType = {
    buttonDisabled?: string
    text?: string 
    action?: () => void
}



export const CartResume = ({buttonDisabled, text = `View Cart`, action}:CartPropsType) => {

  const {totalItems, totalPrice} = useContext(CartContext)
  


  return (
    <Stack direction='column' p={2}>
        <Typography variant='body2'>Total Items: {totalItems} </Typography>
        <Typography variant='body2'>Total Price: {totalPrice} </Typography>
        <Button variant='contained' color='success' size='small' sx={{display: buttonDisabled}} 
        onClick={action}>{text}</Button>
        



    </Stack>
  )
}
