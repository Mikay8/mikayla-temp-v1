import { TextField, InputAdornment, IconButton, Button} from '@mui/material';
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import React, {useState} from 'react';
import { styled } from '@mui/material/styles';
import {theme} from '../Theme'
const CssTextField = styled(TextField)({
    //on before
    '& .MuiInput-input': {//text color input
        fontSize: theme.fontSizesMedium,
        color: theme.palette.primary.main,
    },
    '& .MuiInputLabel-standard': {//text color 
        fontSize: theme.fontSizesMedium,
        color: theme.palette.primary.main,
    },
    '& .MuiInput-underline:before': {//line color 
        borderBottomColor: theme.palette.primary.main,
    },
    '& .MuiFormHelperText-root':{
        color: theme.palette.error.dark,
    },

    //on hover
    '& .MuiInput-underline:not(.Mui-disabled):hover::before': { //line hover
        borderBottomColor: theme.palette.primary.main
    },

    //On focused
    '& .MuiInput-input:focus': {//text color input focus
        color: theme.palette.secondary.main,
    },
    '& label.Mui-focused': {//text color label on click
        color: theme.palette.secondary.main,
    },
    '& .MuiInput-underline:after': {//line color on click
        borderBottomColor: theme.palette.secondary.main,
    },
  });
  const CssVisibilityOff = styled(VisibilityOff)({
    color: theme.palette.primary.main,
  });
  const CssVisibilityOn = styled(Visibility)({
    color: theme.palette.primary.main,
  });
export default function StyledInput({...props}) {
    const [showPassword, setShowPassword] = useState(false);
    const [invalidUsername, setInvalidUsername] = useState('');
    const [invalidPassword, setInvalidPassword] = useState('');
    const [invalidEmail, setInvalidEmail] = useState('');

    const handleClickShowPassword = () => setShowPassword((show) => !show);
  
    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };
  
    const handleMouseUpPassword = (event) => {
      event.preventDefault();
    };
    const handleUsernameChange = (event) => {
        //allows -_.
        var format = /[ `!@#$%^&*()+=\[\]{};':"\\|,<>\/?~]/;
        
        if(format.test(event.target.value)){
            //console.log("Invalid");
            setInvalidUsername('Input invalid.');
        }else{
            //console.log("valid");
            setInvalidUsername('');
        }
      };
      const handlePasswordChange = (event) => {
        //allows ! @ $ & - #
        var format = /[ `%^*()_+=\[\]{};':"\\|,.<>\/?~]/;
        
        if(format.test(event.target.value)){
            //console.log("Invalid");
            setInvalidPassword('Input invalid.');
        }else{
            //console.log("valid");
            setInvalidPassword('');
        }
      };
      const handleEmailChange = (event) => {
        //allows ! @ $ & - #
        var format = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if(format.test(event.target.value)){
            //console.log("Invalid");
            setInvalidEmail('');
        }
        if(event.target.value===""){
            setInvalidEmail('');
        }else{
            //console.log("valid");
            setInvalidEmail('Input invalid.');
        }
      };
    
    if(props.id.includes('password')){
        return (
            <CssTextField variant="standard" 
            type={showPassword ? 'text' : 'password'}
            onChange={handlePasswordChange}
            helperText={invalidPassword}
            slotProps={{
                input: {
                  endAdornment: (
                    <InputAdornment position="end">
                        <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            onMouseUp={handleMouseUpPassword}
                        >
                            {showPassword ? <CssVisibilityOff /> : <CssVisibilityOn/>}
                        </IconButton>
                    </InputAdornment>
                  ),
                },
              }}
            {...props}/>
        );
    }else if(props.id.includes('username')){
        return(<CssTextField 
            onChange={handleUsernameChange}
            helperText={invalidUsername} 
            variant="standard" 
            type="text"
            {...props}/>);
    }else if(props.id.includes('email')){
        return(<CssTextField 
            onChange={handleEmailChange}
            helperText={invalidEmail} 
            variant="standard" 
            type="text"
            {...props}/>);
    } else{
        return(<CssTextField variant="standard" {...props}/>);
    }
}

