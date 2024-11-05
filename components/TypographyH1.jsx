import Typography from '@mui/material/Typography';
import {  useColorScheme } from 'react-native';
import { styled } from '@mui/material/styles';
import {theme, colorChoice} from '../Theme'

const StyledTypographyH1 = styled(Typography)({
    //background color
    color: theme.palette.secondary.light,
    mr: 2,
      fontFamily: "Gill Sans, sans-serif",
      fontWeight: 600,
      fontVariantCaps: 'all-small-caps',
      
      textDecoration: 'none',
  });
export default function TypographyH1({...props}) {
  return (
    <StyledTypographyH1 variant="h4"
    noWrap
    component="a"
     {...props}/>
  );
}

