import React from "react";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Menu,MenuItem,styled } from "@mui/material";
import { useState } from "react";

const MenuOption=styled(MenuItem)`
font-size:14px;
padding:15px 50px 5px 24px;
`

const HeaderMenu=({setOpenDrawar})=>{
    const [open,setOpen]=useState(false);

    const handleClose=()=>{
        setOpen(false)
    }
    const handleClick=(e)=>{
        setOpen(e.currentTarget)
    }
    return(<>
    <MoreVertIcon style={{cursor:'pointer'}} onClick={handleClick} />
      <Menu
        anchorEl={open}
        keepMounted
        open={open}
        onClose={handleClose}
        getcontentanchore1={null}
        anchorOrigin={{
            vertical:'bottom',
            horizontal:'center'
        }}
        transformOrigin={{
            vertical:'top',
            horizontal:'right'
        }}
      >
        <MenuOption onClick={()=>{handleClose();setOpenDrawar(true);}}>Profile</MenuOption>
      </Menu>
    </>)
}

export default HeaderMenu;