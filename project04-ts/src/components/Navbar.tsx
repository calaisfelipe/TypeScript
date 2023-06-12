import {Box, Toolbar, Typography, AppBar} from '@mui/material';
import {Link} from 'react-router-dom'
import { CartResume } from './CartResume';
import {useNavigate} from 'react-router-dom'

export const Navbar = () => {
  const navigate = useNavigate()

  return (
    <Box sx={{ flexGrow: 1 }} >
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
            <Link to='/'>ParaguaiZone</Link>
          </Typography>
          <CartResume action={() => navigate('/cart')}/>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
