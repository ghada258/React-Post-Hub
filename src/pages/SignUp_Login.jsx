import React, { useState } from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";


const SignUp = () => {
  const location = useLocation();
  const signUpPage = location.pathname === '/SignUp';
  const navigate = useNavigate();

   const toggleForm = () => {
    navigate(signUpPage ? '/Login' : '/SignUp' );
  };

    const NavigateHome =()=>{
      navigate('/');
    }

  return (
    <>
      <Container maxWidth={false} disableGutters>
        <Box
          sx={{
            backgroundImage: "url(sign_up_image.svg)",
            backgroundSize: "cover",
            height: "100vh",
            backgroundPosition: "center",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            paddingRight: 10,
          }}
        >
          <Box
            component="form"
            sx={{
              width: "40%",
              backgroundColor: "white",
              p: 2,
              display: "flex",
              gap: 3,
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              borderRadius: 3,
              paddingY: 5,
            }}
            noValidate
            autoComplete="off"
          >
            <Box sx={{display:"flex",gap:1,flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
              <Box component="img" src="logo.svg" alt="logo" />
              <Typography variant="body1" component="p" sx={{color:'#A5A5A5'}}>
                {signUpPage ? 'Sign Up To Reactive Shoes Website' :  "Sign In To Reactive Shoes Website" } 
              </Typography>
            </Box>

           {signUpPage && <TextField
              required
              id="outlined-required"
              label="Name"
              sx={{ width: "80%",marginTop:3 }}
            />} 
            <TextField
              required
              id="outlined-required"
              label="Email"
              sx={{ width: "80%" }}
            />
            <TextField
              required
              id="outlined-required"
              label="Password"
              type="password"
              sx={{ width: "80%" }}
            />
            
            <Button onClick={NavigateHome} variant="contained" size="large" sx={{ cursor:'pointer' ,backgroundColor:'#28665B',width:'80%',height:50, marginTop:3}}>{signUpPage ? 'Sign Up' :  "Sign In" }</Button>
            <Box sx={{display:'flex',justifyContent:'center' ,alignItems:'center'}}>
            <Typography variant="body1" component="p" sx={{color:'#A5A5A5'}}>
               {signUpPage ? 'Already Have an Account ?' :  "Don't Have an Account ?" } 
              </Typography>
              <Button  onClick={toggleForm}  sx={{ cursor:'pointer' ,color:'var(--primary-color)'}}>{signUpPage ? 'Sign In' :  "Sign Up" }</Button>
            </Box>  
          </Box>

     
          
        </Box>
      </Container>
    </>
  );
};

export default SignUp;
