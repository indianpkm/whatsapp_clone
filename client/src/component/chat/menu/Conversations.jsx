import {useContext, useState } from "react";
import { useEffect } from "react";
import { Box,styled } from "@mui/system";
import { Divider } from "@mui/material";
import { getUsers } from "../../../service/api";
import Conversation from "./Conversation";
import { AccountContext } from "../../../context/AccountProvider";

const Component =styled(Box)`
height:81vh;
overflow:overlay;
`
const StyleDivider=styled(Divider)`
margin:0 0 0 70px;
background-color:#e9edef;
opacity:0.6;
`

const Conversations=({text})=>{
    const [users,setUsers]=useState([]);
    const {account,socket,setActiveUsers}=useContext(AccountContext)

    useEffect(()=>{
        const fetchData=async ()=>{
           let res = await getUsers();
           const filterData =res.filter(user=>user.name.toLowerCase().includes(text.toLowerCase()))
           setUsers(filterData);
        }
        fetchData();
    },[text]);

    useEffect(()=>{
        socket.current.emit('addUsers',account);
        socket.current.on('onlineUser',user=>{
            setActiveUsers(user)
        })
    },[account])

    return(<>
    <Component>
        {
            users.map((user,id)=>(
                user.sub !== account.sub &&
                <Box key={id}>
                <Conversation user={user}/>
                <StyleDivider/>
                </Box>
            ))
        }
    </Component>
    </>)
}

export default Conversations;