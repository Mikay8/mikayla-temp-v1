import React, {useState} from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';

export default function NoScreen() {
    
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
                Does not Exists
            </Typography>
        </Grid>
      </Box>    

  </Box>
  );
}

