import { StatusBar } from 'expo-status-bar';
import { StyleSheet, useColorScheme, View } from 'react-native';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from './screens/HomeScreen';
import FirstScreen from './screens/FirstScreen';
import SecondScreen from './screens/SecondScreen'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { theme, darkStyles,lightStyles } from './Theme';
import WebNav from './components/WebNavigation';
import MoblieNav from './components/MobileNavigation';


export default function App() {
  const colorScheme = useColorScheme();
  return (
    <ThemeProvider theme={theme}>
      {/* <View style={colorScheme==='light'?lightStyles.container: darkStyles.container}> */}
      <View style={darkStyles.container}>
        <WebNav
          contents={
            [
              {key:0, component:<HomeScreen/>,name:"Home", isSettings:false},
              {key:1, component:<FirstScreen/>,name:"First", isSettings:false},
              {key:2, component:<SecondScreen/>,name:"Second", isSettings:false},

              {key:3, component:<HomeScreen/>,name:"Profile", isSettings:true},
              {key:4, component:<FirstScreen/>,name:"Setting", isSettings:true},
            ]
          }
        />
      </View>
    </ThemeProvider>
    
  );
}


