import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import {  useColorScheme } from 'react-native';
import { styled } from '@mui/material/styles';
import {theme, colorChoice} from '../Theme'

const CssBottomNavigationAction = styled(BottomNavigationAction)({
    //background color
    color: theme.palette.primary.main,
    "&:hover":{
        color: theme.palette.secondary.main,
    },
    "&:active":{
        color: theme.palette.secondary.main,
    },
    "&.Mui-selected": {
        color: theme.palette.secondary.main,
    }
  });
export default function StyledBottomNavigationAction({...props}) {
  return (
    <CssBottomNavigationAction {...props}/>
  );
}