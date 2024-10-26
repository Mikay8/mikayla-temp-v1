import { StatusBar } from 'expo-status-bar';
import { StyleSheet, useColorScheme, View } from 'react-native';
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MobileHomeScreen from './screens/MobileHomeScreen';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { theme, darkStyles,lightStyles } from './Theme';
export default function App() {
  const colorScheme = useColorScheme();
  return (
    <ThemeProvider theme={theme}>
      {/* <View style={colorScheme==='light'?lightStyles.container: darkStyles.container}> */}
      <View style={darkStyles.container}>
        <MobileHomeScreen
          contents={
            [
              {key:0,component:<LoginScreen/>,name:"test",icon:<FavoriteIcon/>},
              {key:1,component:<SignUpScreen/>,name:"test2",icon:<FavoriteIcon/>},
              {key:2,component:<LoginScreen/>,name:"test3",icon:<FavoriteIcon/>}
            ]
          }
        />
      </View>
    </ThemeProvider>
    
  );
}


