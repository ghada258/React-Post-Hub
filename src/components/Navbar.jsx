import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import { Button } from '@mui/material';


const Navbar = () => {

  return (
    <AppBar position="static" elevation={3} sx={{backgroundColor:'white', paddingX:8}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{display:'flex', justifyContent:'space-between'}}>
           <Box component="img" src="logo.svg" alt="logo"   sx={{ width: 250, height: 'auto' }} />
           <Box sx={{display:'flex',gap:2}}>
            <Button variant="contained" sx={{backgroundColor:'var(--primary-color)', width:150}}>Sign Up</Button>
             <Button variant="outlined" sx={{color:'var(--primary-color)', width:150,   borderColor: 'var(--primary-color)',}}>Log In</Button>
           </Box>
          
           
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar