import { ProductInTheCart } from "../components/ProductInTheCart"
import {useContext} from 'react'
import CartContext from "../context/CartProvider"
import { CartResume } from "../components/CartResume"
import { useNavigate } from 'react-router-dom'

export const MyCart = () => {

    const {cart, dispatch } = useContext(CartContext)
    const navigate = useNavigate()


    const createNewOrder = () => {

        if(cart.length === 0){
            alert('No items in the cart')
            return
        }

        dispatch({type:'SUBMIT'})
        navigate('/neworder')
    }


  return (
    <div style={{height: '77vh'}}>

        {cart.map((item) => <ProductInTheCart item={item} action={dispatch}/> )}
        <CartResume text='Place Order' action={createNewOrder}/>
        

    </div>
  )
}
