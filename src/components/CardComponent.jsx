import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Box } from '@mui/material';

const CardComponent = (props) => {
  return (
    <>
     <Card sx={{bgcolor:'#F3F3F3',maxWidth: 350,padding:2,borderRadius:5}}>
      <Box sx={{bgcolor:'white',borderRadius:5}}>
      <CardMedia
        component="img"
        alt={props.title}
        height="200"
        image={props.image}
        sx={{borderRadius:'8px 8px 0px 0px'}}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {props.title}
        </Typography>
        <Typography variant="body2" width={285} sx={{ color: 'text.secondary'}}>
         {props.description}
        </Typography>
      </CardContent>
      <CardActions sx={{display:'flex' ,justifyContent:'flex-end' ,alignItems:'flex-end',paddingBottom:2,paddingRight:2}}>
         <EditIcon baseClassName="fas"  sx={{ cursor:'pointer' ,color:'var(--primary-color)',bgcolor:'#F3F3F3',padding:1,borderRadius:1}}  />
         <DeleteIcon baseClassName="fas"  sx={{ cursor:'pointer' ,color:'#8C0F0F',bgcolor:'#F3F3F3',padding:1,borderRadius:1}}  />

      </CardActions>
      </Box>
    </Card>

    </>
  )
}

export default CardComponent