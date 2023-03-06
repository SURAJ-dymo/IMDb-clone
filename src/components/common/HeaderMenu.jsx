import { Menu, MenuItem } from '@mui/material';
import React from 'react'
import { routePath } from '../../constant/routes'
import { Link } from 'react-router-dom';
const HeaderMenu = ({ open, handleClose }) => {
  const openMenu = Boolean(open);
  return (
    <Menu
      id="basic-menu"
      anchorEl={open}
      open={openMenu}
      onClose={handleClose}
    >
    
        <Link to={`${routePath.categories}?category=popular`} style={{ textDecoration: 'none', color: 'inherit' }}>
          <MenuItem >Popular</MenuItem>
        </Link>
        <Link to={`${routePath.categories}?category=toprated`} style={{ textDecoration: 'none', color: 'inherit' }}>
          <MenuItem >Top Rated</MenuItem>
        </Link>
        <Link to={`${routePath.categories}?category=upcoming`} style={{ textDecoration: 'none', color: 'inherit' }}>
          <MenuItem >Upcoming</MenuItem>
        </Link>
      
    </Menu>
  )
}

export default HeaderMenu;
