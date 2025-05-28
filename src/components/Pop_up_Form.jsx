import React from 'react'
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, Box } from '@mui/material';
import { useState } from 'react';

const Pop_up_Form = ({open,setOpen}) => {
  
  return (
    <>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle sx={{color:'var(--primary-color)',fontWeight:600}}>Add Your Shoe Post</DialogTitle>
        <DialogContent>
          <TextField label="Title" fullWidth margin="normal" />
          <TextField label="Image URL" fullWidth margin="normal" />
          <TextField label="Description" fullWidth margin="normal" multiline rows={5} />
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