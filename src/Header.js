import React from 'react';
import {NavLink } from 'react-router-dom';
import Button from '@mui/material/Button';

function Header(){
    return(
        <header>
        <h1>My Store</h1>
      {/* <Link to="/">Men</Link>
      <Link to="/women">Women</Link> */}
       <Button
  component={NavLink}
  to="/"
  sx={{
    '&:active': {
      background:'black',
    }
  }}
>Men</Button>
<Button
  component={NavLink}
  to="/women"
  sx={{
    '&:active': {
      background:'black',
    }
  }}
>Women</Button>
        </header>
    )
}

export default Header;