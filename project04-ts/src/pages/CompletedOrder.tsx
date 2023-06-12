import { Stack, Typography } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import {Link} from 'react-router-dom'

export const CompletedOrder = () => {
  return (
    <Stack
      sx={{ height: "77vh" }}
      justifyContent="flex-start"
      alignItems="center"
      textAlign="center"
      spacing={1}
      mt={1}
    >
      <Typography variant="h4">
        We Received your Order and we will prepare everything for you!
      </Typography>
      <Typography variant="body2">Thank you for you purachase</Typography>
      <Stack justifyContent='center' alignItems='center'>
        <HomeIcon />
        <Link style={{color:'#000'}} to='/'>Go back Home</Link>
      </Stack>
    </Stack>
  );
};
