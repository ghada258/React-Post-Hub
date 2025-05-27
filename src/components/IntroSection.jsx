import { Box, Button, Container, Typography } from '@mui/material'
import React from 'react'

const IntroSection = () => {
  return (
    <>
      <Container maxWidth="100%" disableGutters  sx={{marginTop:1}}>
        <Box sx={{ bgcolor: '#F3F3F3', height: '60vh',display:'flex',paddingX:10 ,justifyContent:'space-between',alignItems:'center' }} >
          <Box sx={{display:'flex' ,flexDirection:'column',gap:2}}>
            <Typography variant='h6' sx={{color:'var(--primary-color)'}}>Step Into Greatness</Typography>
            <Typography variant="h3" width={600}  sx={{fontWeight:'bold'}}>Unleash Your Power With Every Step</Typography>
            <Typography width={600} sx={{color:'var(--text-color)'}}>This is a simple platform where users can browse beautiful shoe designs, trends, and descriptions — or contribute their own! No buying, no selling just pure inspiration and style.</Typography>
            <Button variant="contained" sx={{backgroundColor:'#28665B', width:150 ,marginTop:3}}>Exolpre Now</Button>
          </Box>
          <Box component="img" src="Intro_sec_Img.svg" alt="logo" width={450} height={450} sx={{paddingBottom:5}} />
        
        </Box>
         
      </Container>
    </>
  )
}

export default IntroSection