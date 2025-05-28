import React from 'react'
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, Box } from '@mui/material';
import { useState } from 'react';

const Pop_up_Form = ({open,setOpen}) => {

   const [form,setForm]=useState({
         title : "",
         description :"",
         image :""
    })
     
    const[errors ,setErrors] = useState({
          TitleError : "",
          ImageError : "",
          DescriptionError :""
        })

      const addPostSchema = object({
              TitleError: string().required("Title is required"),
              ImageError: string().required("Image Url is required"),
              DescriptionError: string().required("Description is required"),
            });

    const handleonChange = (e)=>{
       setForm({
        ...form , [e.target.name]: e.target.value
      })
      setErrors({ ...errors, [`${e.target.name}Error`]: "" });
    }
  
    const handleAddPost = ()=>{
      
    }

  return (
    <>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle sx={{color:'var(--primary-color)',fontWeight:600}}>Add Your Shoe Post</DialogTitle>
        <DialogContent>
          <TextField label="Title" fullWidth margin="normal" value={form.title} onChange={handleonChange}/>
          <TextField label="Image URL" fullWidth margin="normal" value={form.image}  onChange={handleonChange}/>
          <TextField label="Description" fullWidth margin="normal" value={form.description} onChange={handleonChange} multiline rows={5} />
        </DialogContent>
        <DialogActions sx={{marginRight:2 ,marginBottom:2}}>
          <Button sx={{color:'var(--primary-color)'}} onClick={() => setOpen(false)}>Cancel</Button>
          <Button variant="contained" sx={{bgcolor:'var(--primary-color)'}} onClick={() => setOpen(false)}>Submit</Button>
        </DialogActions>
      </Dialog>

      
    </>
  )
}

export default Pop_up_Form