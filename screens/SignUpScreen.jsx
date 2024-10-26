import React, {useState} from 'react';
import Stack from '@mui/material/Stack';
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import StyledInput from '../components/StyledInput';
import StyledButton from '../components/StyledButton';

export default function SignUpScreen() {
  const [isAlert, setAlert] = useState(false);
  return (
    <Box sx={{ height:'50%', width:'100%' }}>
    <Grid container spacing={2}>
      <Grid size={{ xs: 10, md: 5 }} offset={{ xs: 1 }} >
          <StyledInput sx={{ width: '100%'}} label="First" id="username-login"/>
      </Grid>
      <Grid size={{ xs: 10, md: 5 }} offset={{ xs: 1, md: 0 }}>
          <StyledInput sx={{ width: '100%'}} label="Last" id="username-login"/>
      </Grid>
      <Grid size={{ xs: 10, md: 10 }}offset={{ xs: 1 }}>
          <StyledInput sx={{ width: '100%'}} label="Username" id="username-login"/>
      </Grid>
      <Grid size={{ xs: 10, md: 10 }}offset={{ xs: 1 }}>
          <StyledInput sx={{ width: '100%'}} label="Email" id="email-login"/>
      </Grid>
      <Grid size={{ xs: 10, md: 10 }}offset={{ xs: 1 }}>
          <StyledInput sx={{ width: '100%'}} label="Password" id="password-login"/>
      </Grid>
      <Grid size={{ xs: 10, md: 10 }}offset={{ xs: 1 }} sx={{paddingBottom:'20px'}}>
          {isAlert&&<Alert severity="error" sx={{ backgroundColor:'transparent', color:'red' }} >Error Logging in.</Alert>}
      </Grid>
      <Grid size={{ xs: 10, md: 10 }}offset={{ xs: 1 }}>
          <StyledButton sx={{ width: '100%'}} >Submit</StyledButton>
      </Grid>
      
    </Grid>
  </Box>
  );
}
