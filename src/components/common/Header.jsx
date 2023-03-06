import React, { useState } from 'react'
import { AppBar, Toolbar, styled, Box, Typography, InputBase } from '@mui/material';
import { BookmarkAdd, ExpandMore, Menu } from "@mui/icons-material"
import { logoURL } from '../../constant/constant'
import HeaderMenu from './HeaderMenu';
const StyeledToolbar = styled(Toolbar)`
background:#121212;
min-height:56px !important;
padding:0 115px !important;
display:flex;
justify-content:space-between;
& > *{
    padding:0 16px;
}

&>div{
    display:flex;
    cursor: pointer;
    align-items:center;
    & > p {
        font-weight: 600;
        font-size: 14px;
         }
    }  
& > p {
        font-weight: 600;
        font-size: 14px;
    }

`
const InputSearchField = styled(InputBase)`
    background: #FFFFFF;
    height: 30px;
    width: 55%;
    border-radius: 5px;
`

const Logo = styled("img")({
    width: 64,
    cursor:"pointer"
})

const Header = () => {
    const [open,setOpen]=useState();

    const handleClick=(e)=>{
        setOpen(e.currentTarget)
    }
    const handleClose=()=>{
        setOpen(null)
    }

    return (
        <AppBar position='static'>
            <StyeledToolbar>
                <Logo src={logoURL} alt="logo" />
                <Box onClick={handleClick}>
                    <Menu />
                    <Typography >Menu</Typography>
                </Box>

                <HeaderMenu open={open} handleClose={handleClose}/>

                <InputSearchField variant="outlined" />
                <Typography>IMDb<Typography component="span" style={{ fontSize: 14, color: "yellow" }}>Pro</Typography></Typography>
                <Box>
                    <BookmarkAdd />
                    <Typography>Watchlist</Typography>
                </Box>
                <Box style={{width:60}}>
                <Typography>Sign In</Typography>
                </Box>
                
                <Box>
                    <Typography>EN</Typography>
                    <ExpandMore />
                </Box>
            </StyeledToolbar>
        </AppBar>
    )
}

export default Header;