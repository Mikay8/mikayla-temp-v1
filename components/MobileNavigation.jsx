import React, {useState} from 'react';
import Box from '@mui/material/Box';
import StyledBottomNavigation from './StyledBottomNavigation';
import StyledBottomNavigationAction from './StyledBottomNavigationAction';

export default function MobileNavigation({contents}) {
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