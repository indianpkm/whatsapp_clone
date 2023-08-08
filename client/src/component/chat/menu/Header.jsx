import { Box,styled } from "@mui/material";
import React from "react";
import ChatIcon from '@mui/icons-material/Chat';
import { useContext } from "react";
import HeaderMenu from "./HeaderMenu";
import { useState } from "react";
import { AccountContext } from "../../../context/AccountProvider";
import InfoDrawar from "../../drawer/InfoDrawer";
import GroupsIcon from '@mui/icons-material/Groups';

const Component=styled(Box)`
height:44px;
background:#ededed;
padding:8px 16px;
display:flex;
align-items:center;
`
const Wrapper=styled(Box)`
margin-left:auto;
& > *{
    margin-left:2px;
    padding:8px;
};
&:first-of-type {
    font-size:2px;
    margin-right:8px;
    margin-top:3px
}
`
const Image=styled('img')({
    height:40,
    width:40,
    borderRadius:'50%',
    cursor:'pointer'
})

const Header = () => {
    const [openDrawar,setOpenDrawar]=useState(false);
    const {account}=useContext(AccountContext)

    const toggleDrawar=()=>{
        setOpenDrawar(true)
    }
    return (<>
        <Component>
            <Image src={account.picture} alt='dp' onClick={()=>toggleDrawar()} />
            <Wrapper>
                <GroupsIcon style={{fontSize:29,marginRight:10}}/>
                <ChatIcon/>
                <HeaderMenu setOpenDrawar={setOpenDrawar}/>
            </Wrapper>
        </Component>
        <InfoDrawar
        open={openDrawar} setOpen={setOpenDrawar}/>
    </>)
}

export default Header; 