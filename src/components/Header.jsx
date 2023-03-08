import React from 'react';

import { Typography,AppBar,Toolbar } from '@mui/material';

const drawerWidth = 240;

const  Header =()=>{ 
    return (
        <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Gallery
          </Typography>
        </Toolbar>
      </AppBar>    )
  
};


export default Header;
