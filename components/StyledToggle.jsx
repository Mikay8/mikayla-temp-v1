import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { styled } from '@mui/material/styles';
import {theme} from '../Theme'
const CssToggleButton = styled(ToggleButton)({
    //background color
    border:'none',
    borderRadius:0,
    backgroundColor:'transparent',
    color: theme.palette.primary.main,
    
    fontSize: theme.fontSizesMedium,
    borderBottom: '2px solid',
   
    "&.Mui-selected": {
      backgroundColor: "transparent",
      color: theme.palette.secondary.main,
      borderBottomColor: theme.palette.secondary.main,
       "&:hover": {
        backgroundColor: "transparent",
       },
       
     },
    "&:hover":{
      backgroundColor: 'transparent'
    }
  });
export default function StyledToggleButton({...props}) {
  return (
    <CssToggleButton variant="outlined" {...props}/>
  );
}

