import { Drawer, Typography } from "@mui/material";
import { Box,styled } from "@mui/system";
import React from "react";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Profile from "./Profile";

const Header=styled(Box)`
background:#008069;
height:107px;
color:#ffffff;
display:flex;
&> svg, & >p {
    margin-top:auto;
    padding:15px;
    font-weight:600;
}
`
const Component=styled(Box)`
background:#ededed;
height:80%;
`
const drawarStyle={
    left:20,
    top:17,
    height:'95%',
    width:'30%',
    boxShadow:'none',
}

const InfoDrawar=({open,setOpen})=>{
    const handleClose=()=>{
        setOpen(false)
    }
    return(<>
    <Drawer
            open={open}
            onClose={handleClose}
            PaperProps={{sx:drawarStyle}}
            style={{zIndex:1500}}
          >
            <Header>
                <ArrowBackIcon style={{cursor:'pointer'}} onClick={()=>setOpen(false)} />
                <Typography>Profile</Typography>
            </Header>
            <Component><Profile/></Component>
          </Drawer>
    </>)
}

export default InfoDrawar;