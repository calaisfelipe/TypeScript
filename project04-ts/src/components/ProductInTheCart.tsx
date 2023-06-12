import {Card, CardMedia, CardContent, Typography, Select, MenuItem, Button, CardActions} from '@mui/material'
import ClearIcon from '@mui/icons-material/Clear';
import { CardItemType, ReducerActionType } from '../context/CartProvider';
import {ReactElement, useState} from 'react'


type ProductInTheCartProps = {
    item: CardItemType
    action: React.Dispatch<ReducerActionType>
}

export const ProductInTheCart = ({item, action}: ProductInTheCartProps):ReactElement => {
        const [quantity, setQuantity] = useState(1)

    const handleQty = (e: any):void  => {
        setQuantity(Number(e.target.value))
        action({type: 'QTY', payload: {...item, qty: Number(e.target.value)}})

    }

  return (
    <Card sx={{ display: 'flex', justifyContent:'center', marginTop: '10px', alignItems:'center' }} variant='outlined'>
    <CardMedia
      component="img"
      sx={{ width: 101, borderRadius: 3 }}
      image={`../src/images/${item.sku}.jpg`}
      alt={item.name}
    />
    <CardContent sx={{ width: 200 }}>
        <Typography variant='body1'>{item.name}</Typography>
    </CardContent>
    <CardContent >
        <Typography variant='body1'>R$ {item.price}</Typography>
    </CardContent>
    <CardContent >
        <Select value={item.qty} size='small' onChange={handleQty}>
            <MenuItem value={1} >1</MenuItem>
            <MenuItem value={2} >2</MenuItem>
            <MenuItem value={3} >3</MenuItem>
            <MenuItem value={4} >4</MenuItem>
            <MenuItem value={5} >5</MenuItem>
            <MenuItem value={6} >6</MenuItem>
            <MenuItem value={7} >7</MenuItem>
            <MenuItem value={8} >8</MenuItem>
            <MenuItem value={9} >9</MenuItem>
            <MenuItem value={10} >10</MenuItem>
        </Select>
    </CardContent>
    <CardContent >
        <Typography variant='body1'>R$ {(quantity * item.price).toFixed(2)}</Typography>
    </CardContent>
    <CardActions>
        <Button variant='outlined' color='error' size='small' onClick={() => action({type: 'REMOVE', payload:item}) }><ClearIcon/></Button>
    </CardActions>


  </Card>
  )
}
