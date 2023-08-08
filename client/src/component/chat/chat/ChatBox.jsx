import { Box } from "@mui/material";
import ChatHeader from "./ChatHeader";
import Messages from "./Messages";
import { useContext, useEffect } from "react";
import { getConversation } from "../../../service/api";
import { useState } from "react";
import { AccountContext } from "../../../context/AccountProvider";


const ChatBox=()=>{
    const {person,account}=useContext(AccountContext);
    const [conversation,setConversation]=useState({});

    useEffect(()=>{
        const getConversationDetail=async ()=>{
           let data = await getConversation({senderId:account.sub,receiverId:person.sub})
           setConversation(data)
        }
        getConversationDetail();
    },[person.sub])
    return(<>
    <Box style={{height:'75%'}}>
        <ChatHeader person={person}/>
        <Messages person={person} conversation={conversation}/>
    </Box>
    </>)
}

export default ChatBox;