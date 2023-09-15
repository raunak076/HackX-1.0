import { Box, Button } from '@mui/material'
import React from 'react'
import "./Role.css"

const Role = () => {
  return (
   <Box>
    <Box className={"r-btn"}>
      <Box  >
        <Button sx={{ bgcolor: "rgba(35, 180, 32,0.7)",color:"black"}} variant='outlined' size='large'>
    Create Role
        </Button>
        </Box>
        <Box>
        <Button sx={{ bgcolor:" rgba(72, 149, 194,0.8)",color:"black"}} variant='outlined' size='large'>
        Manage Role
        </Button>
      </Box>
      </Box>
   </Box>
  )
}

export default Role
