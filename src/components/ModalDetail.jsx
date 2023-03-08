import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CloseOutlined, Favorite, Share, Visibility } from '@mui/icons-material';
import Grid from '@mui/material/Grid';
import './card.css'





const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '50rem',
  height: '60vh',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  border:'none'
};

const text ={
  fontFamily:' Nunito, sans-serif',

}

const topText = {
  fontFamily:' Nunito, sans-serif',
  fontWeight:'bold',
  color:'#443895',
}

const bottomText = {
  paddingTop:10,
  fontFamily:' Nunito, sans-serif',
  color:'black'

}


const ModalDetail = ({ handleClose, open,item}) => {
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{border:'none',outline:'none'}}
      >
        <Box sx={style}>
        <Grid container spacing={{ xs: 2, md: 1 }} >
            <Grid item xs={6} md={6}>
              <div style={{width:'100%'}}>
              <img height="250" width="90%" src={item.imageLink} style={{ borderRadius: 3 }} alt="yidiyada" />
              <a style={{textDecoration:'none',color:'#fff'}} target="_blank" href={item.link}> <Button className='modal-button' sx={{background:"#443895", color:"#fff", width:"90%",  fontFamily:' Nunito, sans-serif'}}>Make an Offer</Button></a>

              </div>
            </Grid>
            <Grid item xs={6} md={6}>
              <div style={{display:'flex',alignContent:'baseline',justifyContent:'space-between',paddingTop:10}} >
                <div>
                  <Typography sx={topText} variant='h4'>{item.userName}</Typography>
                </div>
                <div>
                  <Share sx={{fontSize:30}}></Share>
                </div>
              </div>
              <div style={{paddingTop:20}}>
                <Typography color="grey"  sx={text}>OWNER: {item.address.slice(0,10)}...</Typography>
                <Typography color="grey">COLLECTION: {item.collection}</Typography>
              </div>

              <div style={{display:'flex',alignContent:'baseline',justifyContent:'space-between',paddingTop:20}}>
                <Typography sx={{display:'flex',alignContent:'baseline', color:'grey'}}>
                  <Visibility sx={text}></Visibility> 3 Views
                </Typography>
                <Typography sx={{display:'flex',alignContent:'baseline', color:'grey'}}>
                  <Favorite sx={text}></Favorite> 2 favorites
                </Typography>
              </div>

              <Typography sx={bottomText} variant='h5'>Top Offer : <span style={{color:'grey'}}> {item.topOffer}</span> Eth</Typography>
            </Grid>
          </Grid>

        </Box>
      </Modal>
    </div>
  )

};

export default ModalDetail;
