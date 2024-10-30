import { StatusBar } from 'expo-status-bar';
import { StyleSheet, useColorScheme, View } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import SignUpScreen from './screens/SignUpScreen';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MobileNavigation from './components/MobileNavigation';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { theme, darkStyles,lightStyles } from './Theme';
export default function App() {
  const colorScheme = useColorScheme();
  return (
    <ThemeProvider theme={theme}>
      {/* <View style={colorScheme==='light'?lightStyles.container: darkStyles.container}> */}
      <View style={darkStyles.container}>
        <MobileNavigation
          contents={
            [
              {key:0,component:<HomeScreen/>,name:"Home",icon:<FavoriteIcon/>},
              {key:1,component:<SignUpScreen/>,name:"Discover",icon:<FavoriteIcon/>},
              {key:2,component:<SignUpScreen/>,name:"Settings",icon:<FavoriteIcon/>}
            ]
          }
        />
      </View>
    </ThemeProvider>
    
  );
}


