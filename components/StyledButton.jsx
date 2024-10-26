import { Button } from '@mui/material';
import {  useColorScheme } from 'react-native';
import { styled } from '@mui/material/styles';
import {theme, colorChoice} from '../Theme'

const CssButton = styled(Button)({
    //background color
    
    borderColor: theme.palette.primary.main,
    fontSize: theme.fontSizesMedium,
    border: '2px solid',
    "&:hover":{
      backgroundColor: 'transparent'
    },
    "&:active":{
      color:theme.palette.secondary.main,
      borderColor: theme.palette.secondary.main,
      backgroundColor: 'transparent'
    }
  });
export default function StyledInput({...props}) {
  return (
    <CssButton variant="outlined" {...props}/>
  );
}

