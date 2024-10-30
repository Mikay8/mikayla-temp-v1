import React, {useState} from 'react';
import {Image, ScrollView} from 'react-native';
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import StyledInput from '../components/StyledInput';
import StyledButton from '../components/StyledButton';

export default function HomeScreen() {
    
  return (
  <Box sx={{ height:'50%'}}>
      <Grid container spacing={2} sx={{paddingTop:"15px"}}>
        <Grid size={{ xs: 12 }} display="flex" justifyContent="center" alignItems="center" >
            <Image source={require('../assets/favicon.png')}/>
        </Grid>
      </Grid>
     
        <Grid container spacing={2}>
            <Grid size={{ xs: 10 }}offset={{ xs: 1 }}>
                <StyledInput sx={{ width: '100%'}} label="Username" id="username-login"/>
            </Grid>
            <Grid size={{ xs: 10 }}offset={{ xs: 1 }}>
                <StyledInput sx={{ width: '100%'}} label="Username" id="username-login"/>
            </Grid>
            <Grid size={{ xs: 10 }}offset={{ xs: 1 }}>
                <StyledInput sx={{ width: '100%'}} label="Username" id="username-login"/>
            </Grid>
            <Grid size={{ xs: 10 }}offset={{ xs: 1 }}>
                <StyledInput sx={{ width: '100%'}} label="Username" id="username-login"/>
            </Grid>
            <Grid size={{ xs: 10 }}offset={{ xs: 1 }}>
                <StyledInput sx={{ width: '100%'}} label="Username" id="username-login"/>
            </Grid>
            <Grid size={{ xs: 10 }}offset={{ xs: 1 }}>
                <StyledInput sx={{ width: '100%'}} label="Username" id="username-login"/>
            </Grid>
            <Grid size={{ xs: 10 }}offset={{ xs: 1 }}>
                <StyledInput sx={{ width: '100%'}} label="Username" id="username-login"/>
            </Grid>
            <Grid size={{ xs: 10 }}offset={{ xs: 1 }}>
                <StyledInput sx={{ width: '100%'}} label="Username" id="username-login"/>
            </Grid>
            <Grid size={{ xs: 10 }}offset={{ xs: 1 }}>
                <StyledInput sx={{ width: '100%'}} label="Username" id="username-login"/>
            </Grid>
            <Grid size={{ xs: 10 }}offset={{ xs: 1 }}>
                <StyledInput sx={{ width: '100%'}} label="Username" id="username-login"/>
            </Grid>
            <Grid size={{ xs: 10 }}offset={{ xs: 1 }}>
                <StyledInput sx={{ width: '100%'}} label="Username" id="username-login"/>
            </Grid>
            <Grid size={{ xs: 10 }}offset={{ xs: 1 }}>
                <StyledInput sx={{ width: '100%'}} label="Username" id="username-login"/>
            </Grid>
            <Grid size={{ xs: 10 }}offset={{ xs: 1 }}>
                <StyledInput sx={{ width: '100%'}} label="Username" id="username-login"/>
            </Grid>
            <Grid size={{ xs: 10 }}offset={{ xs: 1 }}>
                <StyledInput sx={{ width: '100%'}} label="Username" id="username-login"/>
            </Grid>
            <Grid size={{ xs: 10 }}offset={{ xs: 1 }}>
                <StyledInput sx={{ width: '100%'}} label="Username" id="username-login"/>
            </Grid>
            
        </Grid>
    
  </Box>
  );
}

