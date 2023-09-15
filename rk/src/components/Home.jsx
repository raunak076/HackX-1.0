import { Box, Button, Typography } from '@mui/material'
import React from 'react'

const Home = () => {
  return (
    <Box>
    <Box width={"100%"} mt={3} gap={2} display={"flex"} sx={{marginRight:"20%"}} justifyContent={"right"}>
        <Box >
        <Button variant="outlined" color="primary">
          Register
        </Button> 
        </Box>
        <Box mr={4}>
        <Button  variant="contained" color="primary">
          Login
        </Button> 
        </Box>
    </Box>
    <Box sx={{}}>
        
      <Typography variant="h6" color="initial">Welcome to Inventory Management System</Typography>
    </Box>
    </Box>
  )
}

export default Home
