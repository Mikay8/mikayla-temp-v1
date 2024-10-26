import BottomNavigation from '@mui/material/BottomNavigation';

import {  useColorScheme } from 'react-native';
import { styled } from '@mui/material/styles';
import {theme, colorChoice} from '../Theme'

const CssBottomNavigation = styled(BottomNavigation)({
    //background color
    fontSize: theme.fontSizesMedium,
    backgroundColor: 'transparent',

  });
export default function StyledBottomNavigation({...props}) {
  return (
    <CssBottomNavigation {...props}/>
  );
}