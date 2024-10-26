import React, {useState} from 'react';
import { StyleSheet, useColorScheme} from 'react-native';
import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    palette: {
      primary: {
        light: '#8561c5',
        main: '#673ab7',//purple
        dark: '#482880',
        contrastText: '#e5eff8'//light blue
      },
      secondary: {
        light: '#bb6bc9',
        main: '#ab47bc',//pink ish 
        dark: '#773183',
        contrastText: '#feeaf6'//light pink ish
      },
    },
    fontSizesMedium:'18px' 
  });

  export const lightStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#e5eff8',//light blue
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  export const darkStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#222a31',//black ish
      alignItems: 'center',
      justifyContent: 'center',
    },
  });