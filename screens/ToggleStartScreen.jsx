import React, {useState} from 'react';
import LoginScreen from './LoginScreen';
import SignUpScreen from './SignUpScreen';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import StyledToggleButton from '../components/StyledToggle'

export default function ToggleStartScreen() {
    const [alignment, setAlignment] = useState('Sign Up');
    const handleChange = (event, newAlignment) => {
        if (newAlignment !== null) {
            setAlignment(newAlignment);
          }
      };
    return (
    <Box sx={{ flexGrow: 1, alignItems: 'center', alignContent:'center', width:'80%' }}>
       <Grid container sx={{paddingBottom:'25px'}}>
            <Grid size={{ xs: 6}}offset={{ xs: 3,sm:4, md:4.5, lg:5 }}>
                <ToggleButtonGroup
                    color="primary"
                    value={alignment}
                    defaultValue={alignment}
                    exclusive
                    onChange={handleChange}
                    aria-label="Platform"
                    >
                    <StyledToggleButton value="Sign Up">Sign Up</StyledToggleButton>
                    <StyledToggleButton value="Log in">Log in</StyledToggleButton>
                </ToggleButtonGroup>
            </Grid>
       </Grid>
        {
            alignment==="Sign Up"?
            <SignUpScreen/>
            :
            <LoginScreen/>
        }
        
    </Box>
    );
}


