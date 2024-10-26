import { StatusBar } from 'expo-status-bar';
import { StyleSheet, useColorScheme, View } from 'react-native';
import LoginScreen from './screens/LoginScreen';
import ToggleStartScreen from './screens/ToggleStartScreen';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { theme, darkStyles,lightStyles } from './Theme';
export default function App() {
  const colorScheme = useColorScheme();
  return (
    <ThemeProvider theme={theme}>
      {/* <View style={colorScheme==='light'?lightStyles.container: darkStyles.container}> */}
      <View style={darkStyles.container}>
        <ToggleStartScreen/>
      </View>
    </ThemeProvider>
    
  );
}


