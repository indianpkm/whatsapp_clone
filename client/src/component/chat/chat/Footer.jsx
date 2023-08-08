import { Box, InputBase,styled } from "@mui/material";
import EmojiEmotionsOutlinedIcon from '@mui/icons-material/EmojiEmotionsOutlined';
import AttachFileOutlinedIcon from '@mui/icons-material/AttachFileOutlined';
import MicOutlinedIcon from '@mui/icons-material/MicOutlined';
import { useEffect } from "react";
import { uploadFile } from "../../../service/api";

const Container=styled(Box)`
height:58px;
background:#ededed;
display:flex;
align-items:center;
width:100%;
padding:0 0px;
&>*{
    margin:5px;
    color:#919191;
}
`
const Search=styled(Box)`
background-color:#ffffff;
border-radius:18px;
width:85%;
`
const InputField=styled(InputBase)`
width:100%;
padding:20px;
height:20px;
padding-left:25px;
font-size:14px;
`
const ClipIcon=styled(AttachFileOutlinedIcon)`
transform:rotate(40deg)
`

const Footer=({sendText,setValue,value,file,setFile,setImage})=>{
    useEffect(()=>{
        const getImage=async ()=>{
            if(file){
                const data=new FormData();
                data.append('name',file.name);
                data.append('file',file)
               let res = await uploadFile(data)
               setImage(res.data)
            }
        }
        getImage();
    },[file,setImage])

    const onFileChange=(e)=>{
        console.log(e);
        setFile(e.target.files[0])
        setValue(e.target.files[0].name)
    }
    
    return(<>
    <Container>
    <EmojiEmotionsOutlinedIcon/>
    <label htmlFor="fileInput">
    <ClipIcon/>
    </label>
    <input type='file' id="fileInput"
    style={{display:'none'}}
    onChange={(e)=>onFileChange(e)}
    />
    <Search>
        <InputField placeholder="Type a message" 
        onChange={(e)=>setValue(e.target.value)}
        onKeyDown={(e)=>sendText(e)}
        value={value}
        />
    </Search>
    <MicOutlinedIcon/>
    </Container>
    </>)
}

export default Footer;