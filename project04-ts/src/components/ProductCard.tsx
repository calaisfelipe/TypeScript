import {
  Card,
  CardMedia,
  Typography,
  CardContent,
  Button,
  CardActions,
  Badge,
} from "@mui/material";
import { ProductsType } from "../context/ProductsProvider";
import { useContext, useState } from "react";
import CartContext from "../context/CartProvider";

type ProductsCardType = {
  item: ProductsType;
};

export const ProductCard = ({ item }: ProductsCardType) => {
  const { dispatch, cart } = useContext(CartContext);
  const [show, setShow] = useState<boolean>(true)
  

  const addProduct = () => {
    if (cart.find((itens) => itens.sku === item.sku)){   
      return;
    } 

    dispatch({
      type: "ADD",
      payload: { ...item, qty: 1 },
    });
    setShow(false)
  };

  return (
    
    <Card
      sx={{ maxWidth: 345, minWidth: 180 }}
      key={item.sku}
      variant="outlined"
    >
      <CardMedia sx={{ height: 140 }} image={item.imageSrc} title={item.name} />
      
      <CardContent>
      
        <Typography gutterBottom variant="h5" component="div">
          
            {item.name}
          
        </Typography>
        
        <Typography variant="body2" color="text.secondary">
          U$ {item.price}
        </Typography>
      </CardContent>
      
      <Badge
      color="success"
      badgeContent="Added to cart"
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      invisible={show}
  
    >
      <CardActions>
      
        <Button
          size="small"
          variant="outlined"
          color="success"
          onClick={addProduct}
          disabled={!show}
        >
          Add to Cart
        </Button>
        
      </CardActions>
      </Badge>
    </Card>
    
  );
};
