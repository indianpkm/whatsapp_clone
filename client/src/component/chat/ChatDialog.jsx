import { Box, Dialog, styled } from "@mui/material";
import React from "react";
import EmptyChat from "./chat/EmptyChat";
import ChatBox from "./chat/ChatBox";
import { useContext } from "react";
import Menu from "./menu/Menu";
import { AccountContext } from "../../context/AccountProvider";

const dialogstyle = {
    height: '95%',
    width: '100%',
    margin: '20px',
    borderRadius: '0',
    maxWidth: '100%',
    maxHeight: '100%',
    boxShadow: 'none',
    overFlow: 'hidden',
}

const Component = styled(Box)`
display:flex;
`
const LeftComponent = styled(Box)`
min-width:450px;
`
const RightComponent = styled(Box)`
width:73%;
min-width:300px;
height:100%;
border-left:1px solid rgba(0,0,0,0.14)
`

const ChatDialog = () => {
    const {person} = useContext(AccountContext)
    return (<>
        <Dialog
            open={true}
            PaperProps={{ sx: dialogstyle }}
            hideBackdrop={true} maxWidth={'md'}>
            <Component>
                <LeftComponent>
                    <Menu/>
                </LeftComponent>
                <RightComponent>
                    {Object.keys(person).length ? <ChatBox/> : <EmptyChat/>}
                </RightComponent>
            </Component>
        </Dialog>
    </>)
}

export default ChatDialog;