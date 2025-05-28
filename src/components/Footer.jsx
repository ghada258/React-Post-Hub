import { Height } from '@mui/icons-material'
import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import WifiCalling3Icon from '@mui/icons-material/WifiCalling3';
import EmailIcon from '@mui/icons-material/Email';
import LocationPinIcon from '@mui/icons-material/LocationPin';

const Footer = () => {
  return (
    <>
     <Container maxWidth="100%" disableGutters  sx={{marginTop:1,bgcolor:'var(--primary-color)' ,Height:'50vh' }}>
        <Box  sx={{display:'flex',justifyContent:'space-between',gap:3,paddingX:10 ,paddingY:5}} >
          <Box sx={{display:'flex' , flexDirection :'column' ,gap:3}}>
           <Box component="img" src="logo_footer.svg" alt="logo"   sx={{ width: 250, height: 'auto' }} />
            <Typography width={450} sx={{color:'var(--footer-text)'}}>This is a simple platform where users can browse beautiful shoe designs, trends, and descriptions — or contribute their own! No buying, no selling — just pure inspiration and style.</Typography>
            <Box sx={{display:'flex',alignItems:'center' ,gap:1}}>
                 <Box component="img" src="facebook.svg" alt="logo"  sx={{ cursor:'pointer' , paddingX:2 ,paddingY:1,width: 13,bgcolor:'var(--footer-text)', height: 'auto',borderRadius:1 }} />
                  <TwitterIcon baseClassName="fas"  sx={{ cursor:'pointer' ,color:'var(--primary-color)',bgcolor:'var(--footer-text)',padding:1,borderRadius:1}}  />
                 <InstagramIcon baseClassName="fas" sx={{ cursor:'pointer' ,color:'var(--primary-color)',bgcolor:'var(--footer-text)',padding:1,borderRadius:1}}  />
            </Box>
          </Box>  

          <Box  sx={{display:'flex' ,flexDirection:'column',justifyContent:'flex-start',gap:3}}>
            <Typography variant='h5' sx={{color:'white',fontWeight:600}}>Contact Us</Typography>
            <Box sx={{display:'flex' ,flexDirection:'column',alignItems:'flex-start'  ,gap:1}}>
                <Box sx={{display:'flex' ,gap:2,justifyContent:'center',alignItems:'center'}}>
                <WifiCalling3Icon baseClassName="fas"  sx={{color:'var(--primary-color)',bgcolor:'var(--footer-text)',padding:1,borderRadius:1}}  />
                <Typography variant='body1' sx={{color:'white'}} >(202) 552-0126</Typography>
                </Box>
                
                <Box sx={{display:'flex' ,gap:2,justifyContent:'center',alignItems:'center'}}>
                <EmailIcon baseClassName="fas"  sx={{color:'var(--primary-color)',bgcolor:'var(--footer-text)',padding:1,borderRadius:1}}  />
                <Typography variant='body1' sx={{color:'white'}} >ReactiveShoes@gmail.com</Typography>
                </Box>

                <Box sx={{ display:'flex' ,gap:2,justifyContent:'center',alignItems:'center'}}>
                <LocationPinIcon baseClassName="fas"  sx={{color:'var(--primary-color)',bgcolor:'var(--footer-text)',padding:1,borderRadius:1}}  />
                <Typography variant='body1' sx={{color:'white'}} > Parker Rd. Allentown,Cairo 31134</Typography>
                </Box>
           </Box>
            
          </Box>
         
        </Box>
        <Box sx={{color:'var(--footer-text)',paddingBottom:2}}>
            <hr />
            <Box sx={{display:'flex' ,alignItems:'center' ,justifyContent:'center',paddingTop:1}}>
               <Typography>© 2025</Typography>
               <Box component="img" src="logo_footer.svg" alt="logo"   sx={{ width: 150, height: 'auto',paddingLeft:1 }} />
               <Typography>All Rights Reserved.</Typography>
            </Box>
        </Box>
        
     </Container>

    </>
  )
}

export default Footer