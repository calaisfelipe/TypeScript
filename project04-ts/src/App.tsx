import { useContext } from "react";
import ProductsContext from "./context/ProductsProvider";
import { ProductCard } from "./components/ProductCard";
import { Grid, Stack } from "@mui/material";
import { CartResume } from "./components/CartResume";

import "./App.css";

function App() {
  const products = useContext(ProductsContext);


  return (
    <Stack height='77vh'>
      <Grid container spacing={2} mt={1} justifyContent="center">
        {products?.products?.map((item) => (
          <Grid item>
            <ProductCard
              item={item}
            />
          </Grid>
        ))}
      </Grid>
      <CartResume buttonDisabled="none"/>
    </Stack>
  );
}

export default App;
