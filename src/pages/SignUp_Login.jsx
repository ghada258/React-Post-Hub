import React, { useState } from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { object, string } from 'yup';



const SignUp = () => {
  const location = useLocation();
  const signUpPage = location.pathname === '/SignUp';
  const navigate = useNavigate();
  
  

  const [form,setForm]=useState({
       Name : "",
       Email :"",
       Password :""
  })

 const[errors ,setErrors] = useState({
      EmailError : "",
      NameError : "",
      PasswordError :""
    })

    const signUpSchema = object({
       Name: string().required("Name is required"),
      Email: string().email("Invalid email").required("Email is required"),
      Password: string().required("Password is required"),
     });

    const loginSchema = object({
     Email: string().email("Invalid email").required("Email is required"),
     Password: string().required("Password is required"),
     });

   const toggleForm = () => {
    navigate(signUpPage ? '/Login' : '/SignUp' );
  };

    

    const handleChange =(e)=>{
      setForm({
        ...form , [e.target.name]: e.target.value
      })
      setErrors({ ...errors, [`${e.target.name}Error`]: "" });
    }



const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const schema = signUpPage ? signUpSchema : loginSchema;
    await schema.validate(form, { abortEarly: false });

    setErrors({ NameError: "", EmailError: "", PasswordError: "" });

    if (signUpPage) {
      const response = await axios.post("http://localhost:3000/register", {
        name: form.Name,
        email: form.Email,
        password: form.Password,
      });
      console.log("Registered successfully:", response.data);
      localStorage.setItem("token", response.data.accessToken); 
      localStorage.setItem("username", response.data.user.name);
      localStorage.setItem("userId", response.data.user.id);
      navigate('/');
    } else {
      const response = await axios.post("http://localhost:3000/login", {
        email: form.Email,
        password: form.Password,
      });
      console.log("Logged in successfully:", response.data);
      localStorage.setItem("token", response.data.accessToken); 
      localStorage.setItem("username", response.data.user.name);
       localStorage.setItem("userId", response.data.user.id);
      navigate('/');
    }
  } catch (err) {
    if (err.name === "ValidationError") {
      const newErrors = { NameError: "", EmailError: "", PasswordError: "" };
      err.inner.forEach((validationError) => {
        const key = validationError.path + "Error";
        newErrors[key] = validationError.message;
      });
      setErrors(newErrors);
    } else {
      console.error("Error:", err.response?.data || err.message);
    }
  }
};




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
            onSubmit={handleSubmit}
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
              value={form.Name}
              onChange={handleChange}
              name="Name"
               error={Boolean(errors.NameError)}
               helperText={errors.NameError}
            />} 
            <TextField
              required
              id="outlined-required"
              label="Email"
              sx={{ width: "80%" }}
              value={form.Email}
              onChange={handleChange}
              name="Email"
               error={Boolean(errors.EmailError)}
               helperText={errors.EmailError}
            />
            <TextField
              required
              id="outlined-required"
              label="Password"
              type="password"
              sx={{ width: "80%" }}
              value={form.Password}
              onChange={handleChange}
              name="Password"
               error={Boolean(errors.PasswordError)}
               helperText={errors.PasswordError}
            />
            
            <Button  type="submit" variant="contained" size="large" sx={{ cursor:'pointer' ,backgroundColor:'#28665B',width:'80%',height:50, marginTop:3}}>{signUpPage ? 'Sign Up' :  "Sign In" }</Button>
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
