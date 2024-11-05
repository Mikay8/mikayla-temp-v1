import React, {useState} from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid2';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import StyledToggleButton from '../components/StyledToggle';
import TypographyH1 from './TypographyH1';

export default function WebNavigation({contents}) {
  const [value, setValue] = React.useState(0);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const handleChange = (event, newValue) => {
    console.log(event)
    setValue(newValue);
  };


  return (
    <Box sx={{ height:'100%'}}>
        <Box sx={{ width:'100%',}}>
        
            <Stack
                direction={{ xs: 'row'}}
                sx={{
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
                offset={{xs:1}}
            >
                <ToggleButtonGroup
                value={value}
                defaultValue={value}
                exclusive
                onChange={handleChange}
                aria-label="Platform"
                sx={{ paddingLeft:'25px'}}
                >
                    {
                        contents.map((item) => (
                            !item.isSettings &&<StyledToggleButton value={item.key}>{item.name}</StyledToggleButton>
                        ))
                    }
                    
                </ToggleButtonGroup>
                <TypographyH1> Test </TypographyH1>
                
                <Box sx={{ flexGrow: 0, width:'100px' }}>
                    <Tooltip title="Open settings">
                        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                            <Avatar alt="User" src="/assets/favicon.png" />
                        </IconButton>
                    </Tooltip>
                    <Menu
                        sx={{ mt: '45px' }}
                        id="menu-appbar"
                        anchorEl={anchorElUser}
                        anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                        }}
                        open={Boolean(anchorElUser)}
                        onClose={handleCloseUserMenu}
                        onChange={handleChange}
                    >
                        {contents.map((item) => (
                            item.isSettings &&
                            <MenuItem key={item.name} onClick={handleCloseUserMenu}>
                                <Button  sx={{ textAlign: 'center' }} onClick={event => handleChange(item.name)}>{item.name}</Button>
                            </MenuItem>
                        ))}
                        
                    </Menu>
                </Box>
            </Stack>

        </Box>
      
        {contents[value].component}
    </Box>
  );
}
