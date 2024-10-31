import { StatusBar } from 'expo-status-bar';
import { StyleSheet, useColorScheme, View } from 'react-native';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from './screens/HomeScreen';
import FirstScreen from './screens/FirstScreen';
import SecondScreen from './screens/SecondScreen'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { theme, darkStyles,lightStyles } from './Theme';
import ResponsiveAppBar from './components/ResponsiveAppBar';

export default function App() {
  const colorScheme = useColorScheme();
  return (
    <ThemeProvider theme={theme}>
      {/* <View style={colorScheme==='light'?lightStyles.container: darkStyles.container}> */}
      <View style={darkStyles.container}>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<ResponsiveAppBar />}>
              <Route path="/" element={<HomeScreen />}/>
              <Route path="/first" element={<FirstScreen />} />
              <Route path="/second" element={<SecondScreen />} />
              <Route path="/profile" element={<SecondScreen />} />
              <Route path="/dashboards" element={<SecondScreen />} />
              <Route path="/logout" element={<SecondScreen />} />
              {/* <Route path="*" element={<NoPage />} /> */}
            </Route>
          </Routes>
        </BrowserRouter>
      </View>
    </ThemeProvider>
    
  );
}


