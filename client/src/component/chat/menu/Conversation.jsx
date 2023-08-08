import { Box, Typography,styled } from "@mui/material";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { AccountContext } from "../../../context/AccountProvider";
import { setConversation,getConversation } from "../../../service/api";
import { FormateDate } from "../../../utils/common-utils";

const Component=styled(Box)`
display:flex;
height:45px;
padding:13px 0;
cursor:pointer;
`
const Image=styled('img')({
    width:50,
    height:50,
    borderRadius:'50%',
    padding:'0 14px',
    objectFit:'cover',
})
const Container=styled(Box)`
display:flex;
`
const Status=styled(Typography)`
font-size:12px;
margin-left:auto;
color:#00000099;
margin-right:20px;
`
const Text=styled(Typography)`
font-size:14px;
color:rgba(0,0,0,0.6);
`

const Conversation=({user})=>{
    const {setPerson,activeUsers,account,newMessageFlag}=useContext(AccountContext);
    const [message,setMessage]=useState({})

    useEffect(()=>{
        const getConversationDetail=async()=>{
           const data = await getConversation({senderId:account.sub,receiverId:user.sub})
           setMessage({text:data?.message,timestamp:data?.updateAt})
        }
        getConversationDetail();
    },[newMessageFlag,account.sub,user.sub])

    const getUser=async ()=>{
        setPerson(user);
        await setConversation({senderId:account.sub, receiverId:user.sub})
    }

    return(
    <>
    <Component onClick={()=>getUser()}>
        <Box>
            <Image src={user.picture} alt='dp' />
        </Box>
        <Box style={{width:'100%'}}>
            <Container>
                <Typography>{user.name}</Typography>
                {
                    message?.text && 
                    <Status>
                    {activeUsers?.find(users=>users.sub===user.sub)?<span style={{color:'#05fc1d',fontWeight:'550'}}>Online</span> : 'Offline'}</Status>
                }
            </Container>
            <Box>
                <Text>{message?.text?.includes('localhost')?'media':message.text}</Text>
            </Box>
        </Box>
    </Component>
    </>
    )
}

export default Conversation;