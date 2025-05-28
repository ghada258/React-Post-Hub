import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import { Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';


const Navbar = ({isLoggedIn,setIsLoggedIn}) => {
    
    const [username, setUsername] = useState('');
    const navigate = useNavigate();

    const NavigateSignUp =()=>{
      navigate('/SignUp');
    }
     const NavigatLogin =()=>{
      navigate('/Login');
    }

    const Logout = () =>{
      localStorage.removeItem('token');
      localStorage.removeItem('username');
      navigate('/Login');
    }
   useEffect(()=>{
     const token = localStorage.getItem('token');
     const userName = localStorage.getItem('username');

     if(token && userName ){
      setIsLoggedIn(true);
      setUsername(userName);
     }
     else{
       setIsLoggedIn(false);
      setUsername('');
     }
   },[])
    

  return (
    <AppBar position="static" elevation={3} sx={{backgroundColor:'white', paddingX:8}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{display:'flex', justifyContent:'space-between'}}>
           <Box component="img" src="logo.svg" alt="logo"   sx={{ width: 250, height: 'auto' }} />
           <Box sx={{display:'flex',gap:2}}>

            {isLoggedIn ?
            (
              <Box sx={{display:'flex' ,alignItems:'center' ,gap:3}}>
            <Typography variant='body1' sx={{color:'var(--primary-color)' ,fontWeight:600}}>Welcome , {username}</Typography>
            <Button onClick={Logout} variant="outlined" sx={{  cursor:'pointer' ,color:'var(--primary-color)', width:150,   borderColor: 'var(--primary-color)',}}>Log Out</Button></Box>
             
          ) : (
            <>
             <Button onClick={NavigateSignUp}  variant="contained" sx={{ cursor:'pointer' , backgroundColor:'var(--primary-color)', width:150}}>Sign Up</Button>
             <Button onClick={NavigatLogin} variant="outlined" sx={{  cursor:'pointer' ,color:'var(--primary-color)', width:150,   borderColor: 'var(--primary-color)',}}>Log In</Button></>
            )}
            
           </Box>
          
           
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar