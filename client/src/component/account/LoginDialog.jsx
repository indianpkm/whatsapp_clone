import React from 'react'
import { Dialog, List, ListItem, Typography, styled, Box } from "@mui/material";
import { qrCodeImage } from "../../constrants/data";
import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from 'jwt-decode';
import { useContext } from 'react';
import { AccountContext } from '../../context/AccountProvider';
import { addUser } from '../../service/api';

const Component = styled(Box)`
display:flex;
`
const Container = styled(Box)`
padding:56px 0 56px 56px;
`
const QrCode = styled('img')({
    height: 264,
    width: 264,
    margin: '50px 0 0 50px'
})

const Title = styled(Typography)`
font-size:26px;
color:#525252;
font-weight:300;
font-family:inherit;
margin-bottom:25px;
`
const StyledList = styled(List)`
& > li{
    padding:0;
    margin-top:15px;
    font-size:18px;
    line-height:28px;
    color:#4a4a4a;
}
`

const dialogstyle = {
    height: '96%',
    marginTop: '12%',
    width: '60%',
    maxWidth: '100%',
    maxHeight: '100%',
    boxShadow: 'none',
    overFlow: 'hidden',
}


const LoginDialog = () => {
    const {setAccount}=useContext(AccountContext)

    const onLoginSuccess = async (res) => {
        const decode = jwt_decode(res.credential);
        setAccount(decode)
        await addUser(decode)
    }
    const onLoginError = (res) => {
        console.log('Login failed ', res)
    }

    return (
        <Dialog open={true}
            PaperProps={{ sx: dialogstyle }}
            hideBackdrop={true} >
            <Component>
                <Container>
                    <Title>To use whatsapp on your computer</Title>
                    <StyledList>
                        <ListItem>1. No need to open whatsapp on your phone</ListItem>
                        <ListItem>2. Tap google icon and select gmail account 👉</ListItem>
                        <ListItem>3. Point your finger to the screen to write message</ListItem>
                    </StyledList>
                </Container>
                <Box style={{ position: 'relative' }}>
                    <QrCode src={qrCodeImage} alt='qr code'></QrCode>
                    <Box style={{ position: "absolute", top: '50%', transform: 'translateX(30%)' }}>
                        <GoogleLogin
                            onSuccess={onLoginSuccess}
                            onError={onLoginError}
                        />
                    </Box>
                </Box>
            </Component>
        </Dialog>
    )
}

export default LoginDialog