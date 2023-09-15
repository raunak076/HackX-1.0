import { Avatar, Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Menu, MenuItem, Switch, Typography } from '@mui/material'
import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import EditCalendarIcon from '@mui/icons-material/EditCalendar';
import StorefrontIcon from '@mui/icons-material/Storefront';
import PeopleIcon from '@mui/icons-material/People';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import QrCodeIcon from '@mui/icons-material/QrCode';
import BarChartIcon from '@mui/icons-material/BarChart';
import PieChartIcon from '@mui/icons-material/PieChart';


const Side = () => {
    const [open,setOpen]=useState(false);
  return (
    <>
      <MenuIcon  sx={{display:{xs:"block",sm:'none'}}} />
    <Box
    flex={1}
    sx={{display:{xs:"none",sm:"block"}}}
    > 
        <Box m={5} sx={{bgcolor:"",position:"sticky"}}>
        <Avatar onClick={()=>setOpen(true)} sx={{width:'100px',height:'100px'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp-R0lKIghiAnFejDCFWCRBD00wwq7cnXmEw&usqp=CAU" />
    
        <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
       onClose={()=>{setOpen(false)}}
        open={open}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>
        </Box>
        <Box position={'fixed'}>
        <List>
            <ListItem disablePadding>
            <ListItemButton component="a" href='/'>
                <ListItemIcon>
                <HomeIcon />
                </ListItemIcon>
                <ListItemText primary="Dashboard" />
            </ListItemButton>
            </ListItem>
        </List>
        <Typography variant='p' sx={{position:"relative",float:"left"}}>Inventory</Typography>
        <List>
            <ListItem disablePadding>
            <ListItemButton component="a" href='/myprod'>
                <ListItemIcon>
                <Inventory2Icon />
                </ListItemIcon>
                <ListItemText primary="My Products" />
            </ListItemButton>
            </ListItem>
        </List>
        <List>
            <ListItem disablePadding>
            <ListItemButton component="a" href='/manage'>
                <ListItemIcon>
                <EditCalendarIcon />
                </ListItemIcon>
                <ListItemText primary="Manage" />
            </ListItemButton>
            </ListItem>
        </List>
        <Typography variant='p' sx={{position:"relative",float:"left"}}>Data</Typography>
        <List>
            <ListItem disablePadding>
            <ListItemButton component="a" href='/role'>
                <ListItemIcon>
                <AccessibilityIcon />
                </ListItemIcon>
                <ListItemText primary="Role Based Access" />
            </ListItemButton>
            </ListItem>
        </List>
        <List>
            <ListItem disablePadding>
            <ListItemButton component="a" href='/qr'>
                <ListItemIcon>
                <QrCodeIcon />
                </ListItemIcon>
                <ListItemText primary="QR Entry" />
            </ListItemButton>
            </ListItem>
        </List>
        <Typography variant='p' sx={{position:"relative",float:"left"}}>Analysis Graph</Typography>
        <List>
            <ListItem disablePadding>
            <ListItemButton component="a" href='/bar'>
                <ListItemIcon>
                <BarChartIcon />
                </ListItemIcon>
                <ListItemText primary="Bar" />
            </ListItemButton>
            </ListItem>
        </List>
        <List>
            <ListItem disablePadding>
            <ListItemButton component="a" href='/'>
                <ListItemIcon>
                <PieChartIcon />
                </ListItemIcon>
                <ListItemText primary="Pie" />
            </ListItemButton>
            </ListItem>
        </List>
        <List>
            <ListItem disablePadding>
            <ListItemButton component="a" href='/'>
                <ListItemIcon>
                <DarkModeIcon />
                </ListItemIcon>
              <Switch />
            </ListItemButton>
            </ListItem>
        </List>
        </Box>
    </Box>
    </>
  )
}

export default Side
