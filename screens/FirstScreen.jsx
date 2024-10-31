import React, {useState} from 'react';
import {Image, ScrollView} from 'react-native';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import StyledInput from '../components/StyledInput';
import Typography from '@mui/material/Typography';

export default function FirstScreen() {
    
  return (
  <Box sx={{ height:'100%', overflowY: 'auto' }}>
      <Box sx={{paddingTop:"25px" }}>
        <Grid size={{ xs: 12 }} display="flex" justifyContent="center" alignItems="center" >
            <Typography
                variant="h6"
                noWrap
                component="a"
                sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'white',
                textDecoration: 'none',
                }}
            >
                First Screen
            </Typography>
        </Grid>
      </Box>    
        <Grid container spacing={2} sx={{}}>
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

