import React, { useEffect } from 'react'
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, Box } from '@mui/material';
import { useState } from 'react';
import axios from 'axios';
import { object, string } from 'yup';

const Pop_up_Form = ({open,setOpen ,products ,setProducts , setEditingProduct , editingProduct ,UserPost }) => {

   const [form,setForm]=useState({
         title : "",
         description :"",
         image :""
    })
     
    const[errors ,setErrors] = useState({
          titleError : "",
          imageError : "",
          descriptionError :""
        })

  useEffect(() => {
    if (editingProduct) {
      setForm({
        title: editingProduct.title,
        description: editingProduct.description,
        image: editingProduct.image,
        userId: UserPost
      });
    } else {
      setForm({ title: "", description: "", image: "" });
    }
  }, [editingProduct]);

      const addPostSchema = object({
              title: string().required("Title is required"),
              image: string().required("Image Url is required"),
              description: string().required("Description is required"),
            });

    const handleonChange = (e)=>{
       setForm({
        ...form , [e.target.name]: e.target.value
      })
      setErrors({ ...errors, [`${e.target.name}Error`]: "" });
    }
  
    const handleAddPost = async(e)=>{
      e.preventDefault();
      const schema = addPostSchema;
     
     try {

       await schema.validate(form, { abortEarly: false });
       setErrors({ TitleError : "",ImageError : "", DescriptionError :"" });
      const response = await axios.post("http://localhost:3000/products" ,{
        title: form.title,
        description: form.description,
        image: form.image,
        userId: UserPost
      })
      console.log("Added successfully:", response.data);
      const newProduct = response.data;
      setProducts(prevProducts => [...prevProducts, newProduct]);
      setOpen(false);

     } catch (error) {
       if (error.name === "ValidationError") {
      const newErrors = { TitleError : "",ImageError : "", DescriptionError :""  };
      error.inner.forEach((validationError) => {
        const key = validationError.path + "Error";
        newErrors[key] = validationError.message;
      });
      setErrors(newErrors);
    } else {
      console.error("Error:", error.response?.data || error.message);
    }
     }  
    }

    const handleEdit = async(e) =>{
       e.preventDefault();
      const schema = addPostSchema;

      try {
        await schema.validate(form, { abortEarly: false });
        setErrors({ TitleError : "",ImageError : "", DescriptionError :"" });

        if (editingProduct) {
        const response = await axios.put(`http://localhost:3000/products/${editingProduct.id}`, form);
        setProducts(products.map(product => product.id === editingProduct.id ? response.data : product));
      } 
      setOpen(false);
      } catch (error) {
        if (error.name === "ValidationError") {
      const newErrors = { TitleError : "",ImageError : "", DescriptionError :""  };
      error.inner.forEach((validationError) => {
        const key = validationError.path + "Error";
        newErrors[key] = validationError.message;
      });
      setErrors(newErrors);
    } else {
      console.error("Error:", error.response?.data || error.message);
    }
      }
    }

  return (
    <>
      <Dialog component="form" onSubmit={editingProduct ? handleEdit : handleAddPost} open={open} onClose={() => setOpen(false)}>
        <DialogTitle sx={{color:'var(--primary-color)',fontWeight:600}}>Add Your Shoe Post</DialogTitle>
        <DialogContent>
          <TextField label="Title" name='title' fullWidth margin="normal" value={form.title} onChange={handleonChange} error={Boolean(errors.titleError)} helperText={errors.titleError}/>
          <TextField label="Image URL" name='image' fullWidth margin="normal" value={form.image}  onChange={handleonChange} error={Boolean(errors.imageError)} helperText={errors.imageError}/>
          <TextField label="Description" name='description' fullWidth margin="normal" value={form.description} onChange={handleonChange} multiline rows={5} error={Boolean(errors.descriptionError)} helperText={errors.descriptionError} />
        </DialogContent>
        <DialogActions sx={{marginRight:2 ,marginBottom:2}}>
          <Button sx={{color:'var(--primary-color)'}}  onClick={() => { setOpen(false); setEditingProduct(null); }}>Cancel</Button>
          <Button type='submit' variant="contained" sx={{bgcolor:'var(--primary-color)'}} >Submit</Button>
        </DialogActions>
      </Dialog>

      
    </>
  )
}

export default Pop_up_Form