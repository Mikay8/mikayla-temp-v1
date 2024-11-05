import React, {useState} from 'react';
import {Image, ScrollView} from 'react-native';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import StyledInput from '../components/StyledInput';
import TypographyH1 from '../components/TypographyH1';

export default function HomeScreen() {
    
  return (
  <Box sx={{ height:'100%', overflowY: 'auto' }}>
      <Box sx={{paddingTop:"30px" }}>
        <Grid size={{ xs: 12 }} display="flex" justifyContent="center" alignItems="center" >
            <TypographyH1
                noWrap
            >
                HOME
            </TypographyH1>
        </Grid>
      </Box>    
        <Grid container spacing={2} sx={{ height:'50%'}}>
            <Grid size={{ xs: 10 }}offset={{ xs: 1 }}>
                <StyledInput sx={{ width: '100%'}} label="Username" id="username-login"/>
            </Grid>
            <Grid size={{ xs: 10 }}offset={{ xs: 1 }}>
                <StyledInput sx={{ width: '100%'}} label="Username" id="username-login"/>
            </Grid>
            <Grid size={{ xs: 10 }}offset={{ xs: 1 }}>
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

