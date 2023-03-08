import { React, useState } from 'react';
import { Typography, Box, Toolbar, Card, CardActions, CardContent, CardMedia, Button } from '@mui/material';
import { data } from '../utils/utils';
import { Favorite, FavoriteBorderOutlined, Share } from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import ModalDetail from './ModalDetail';
import './card.css';
import Modal from '@mui/material/Modal';



const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


const thumbnail = {
top:"-50px",
left:"-35px", 
display:"block",
zIndex:999, 
cursor: "pointer",
webkitTransitionProperty: "all",
webkitTransitionDuration: "0.3s", 
webkitTransitionTimingFunction: "ease"
}









const CardBox = () => {

    const [open, setOpen] = useState(false);
    const [selectedItem,setSelectedItem]=useState({})
    const handleOpen = (item) => {
        setSelectedItem(item);
        setOpen(true);
    };
    const handleClose = () => setOpen(false);


    return (
        <Box
            component="main"
            sx={{ flexGrow: 1, bgcolor: 'background.default', p: 5 }}

        >
            <Toolbar />
            {/* {console.log(selectedItem,"selected item")} */}
           { open && <ModalDetail handleClose={handleClose} item={selectedItem} open={open}/ >}
           
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {
                    data.map((item) =>
                        <Card className="card-detail" onClick={()=>handleOpen(item)} sx={{ maxWidth: 250, margin: 2, width: 200, transition: 'all .5s ease-in-out', cursor:'pointer' }}>
                            <CardMedia
                                component="img"
                                alt="green iguana"
                                height="140"
                                image={item.imageLink}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h6" component="div">
                                    {item.userName}
                                </Typography>
                                <Typography variant="body" color="text.secondary">
                                    Top Offer: {item.topOffer} Eth
                                </Typography>
                            </CardContent>
                            <CardActions sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                                <Share></Share>
                                <FavoriteBorderOutlined></FavoriteBorderOutlined>
                                {/* <Button className='card-button'>Hover</Button> */}
                            </CardActions>

                        </Card>
                    )
                }
            </Grid>

        </Box>
    )

};


export default CardBox;
