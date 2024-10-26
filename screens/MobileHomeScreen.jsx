import React, {useState} from 'react';
import Login from './LoginScreen';
import SignUp from './SignUpScreen'
import Box from '@mui/material/Box';
import { useEffect } from 'react';
import StyledBottomNavigation from '../components/StyledBottomNavigation';
import StyledBottomNavigationAction from '../components/StyledBottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function MobileHomeScreen({contents}) {
    const [value, setValue] = React.useState(0);
  return (

  <Box sx={{ height:'100%', width:'100%', position: 'relative'}}>
    
    {
      contents[value].component
    }
    <Box sx={{ bottom:0,width:'100%', position: 'absolute'}}>
        <StyledBottomNavigation
            showLabels
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}>
              {
                contents.map((item) => 
                  <StyledBottomNavigationAction key={item.key} label={item.name} icon={item.icon}/>
                )
              }
        </StyledBottomNavigation>
    </Box>
  </Box>
  );
}