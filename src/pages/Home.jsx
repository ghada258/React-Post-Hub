import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import IntroSection from '../components/IntroSection';
import Footer from '../components/Footer';
import CardComponent from '../components/CardComponent';
import { Box } from '@mui/material';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Pop_up_Form from '../components/Pop_up_Form';
import axios from 'axios';

const Home = () => {
      const [open, setOpen] = useState(false);
      const [products,setProducts] = useState([]);

      useEffect(()=>{
        axios.get('http://localhost:3000/products')
        .then(response=>setProducts(response.data))
        .catch(error => console.error(error));
      },[])


  return (
    <>
    
    <Navbar/>

    {/* Search */}
    <IntroSection />
      <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 700,margin:'auto',marginTop:5 }}>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search For Product"
         />

      <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
     </Paper>

    {/* cards */}
    <Box sx={{marginY:5 , marginX:8 ,display:'grid' , gridTemplateColumns:{ xs: '1fr', sm: '1fr',  md: 'repeat(2, 1fr)', lg:'repeat(4, 1fr)'} ,gap:2 }}>
      {products.map(product =>(
        <CardComponent key={product.id} title={product.title} description={product.description} image={product.image}/>
      ))}
         
         
    </Box>

    {/* pagination */}

    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <Stack spacing={2} >
         <Pagination count={3} variant="outlined" shape="rounded" />
       </Stack>
    </Box>

     {/* addForm */}
    <Box onClick={() => setOpen(true)} sx={{ display: 'flex', justifyContent: 'flex-end', marginRight: 8, cursor:'pointer' }}>
    <AddIcon  baseClassName="fas"  sx={{color:'#F3F3F3',bgcolor:'var(--primary-color)',padding:2,borderRadius:2}}  />
   </Box>

   <Pop_up_Form open={open} setOpen={setOpen}/>

    <Footer/>
    </>
  )
}

export default Home