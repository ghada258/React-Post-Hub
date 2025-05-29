import React, { useEffect, useRef, useState } from 'react';
import Navbar from '../components/Navbar';
import IntroSection from '../components/IntroSection';
import Footer from '../components/Footer';
import CardComponent from '../components/CardComponent';
import { Box } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Pop_up_Form from '../components/Pop_up_Form';
import axios from 'axios';

const Home = () => {
      const [open, setOpen] = useState(false);
      const [products,setProducts] = useState([]);
      const [isLoggedIn ,setIsLoggedIn] = useState(false);
      const [editingProduct, setEditingProduct] = useState(null);
      const UserPost = localStorage.getItem('userId');
      const cardsSectionRef = useRef(null); 
      
      useEffect(() => {
         const fetchProducts = async () => {
           const res = await axios.get("http://localhost:3000/products");
          setProducts(res.data);  
        };
       fetchProducts();
      }, []);


      const handleEditClick = (product) => {
      setEditingProduct(product);
      setOpen(true);
    };

    const handleDelete = async (id) => {
      try {
        await axios.delete(`http://localhost:3000/products/${id}`);
        setProducts(products.filter(product => product.id !== id));
      } catch (error) {
        console.error("Delete failed:", error.response?.data || error.message);
      }
    };

  return (
    <>
    
    <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
    <IntroSection scrollToRef={cardsSectionRef} />
     

    {/* cards */}
    <Box ref={cardsSectionRef} sx={{marginY:5 , marginX:8 ,display:'grid' , gridTemplateColumns:{ xs: '1fr', sm: '1fr',  md: 'repeat(2, 1fr)', lg:'repeat(4, 1fr)'} ,gap:2 }}>
      {products.map(product =>(
        <CardComponent  UserPost={UserPost} onDelete={() => handleDelete(product.id)} onEdit={() => handleEditClick(product)}  open={open} setOpen={setOpen}   key={product.id} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} title={product.title} description={product.description} image={product.image} userId={product.userId} />
      ))}
         
         
    </Box>


     {/* addForm */}
    {isLoggedIn && <Box onClick={() => { setEditingProduct(null); setOpen(true); }} sx={{ display: 'flex',zIndex: 999, justifyContent: 'flex-end', marginRight: 8, cursor:'pointer' }}>
    <AddIcon baseClassName="fas"  sx={{color:'#F3F3F3',marginBottom:5,bgcolor:'var(--primary-color)',padding:2,borderRadius:2}}  />
   </Box>}

   <Pop_up_Form  UserPost={UserPost} open={open} setOpen={setOpen} products={products} setProducts={setProducts} setEditingProduct={setEditingProduct} editingProduct={editingProduct}  />

    <Footer/>
    </>
  )
}

export default Home