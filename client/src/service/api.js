import axios from 'axios';

const url='http://localhost:8000';

export const addUser=async (data)=>{
    try{
      await axios.post(`${url}/add`,data);
    }catch(error){
        console.log('error with adduser api',error.message);
    }
};

export const getUsers=async ()=>{
  try{
   let response = await axios.get(`${url}/users`);
  //  console.log(response)
   return response.data;
  }catch(err){
    console.log('error while get data',err.message)
  }
}

export const setConversation=async(data)=>{
  try{
    await axios.post(`${url}/conversation/add`,data)
  }catch(err){
    console.log('error while set conversation api',err.message)
  }
}

export const getConversation=async(data)=>{
  try{
   let res = await axios.post(`${url}/conversation/get`,data)
   return res.data;
  }catch(err){
    console.log('error while get conversation',err.message)
  }
}

export const newMessage=async(data)=>{
  try{
    await axios.post(`${url}/message/add`,data)
  }catch(err){
    console.log('error while post message conversation',err.message)
  }
}

export const getMessage=async(id)=>{
  try{
   let res = await axios.get(`${url}/message/get/${id}`)
   return res.data
  }catch(err){
    console.log('error while get message',err.message)
  }
}

export const uploadFile=async(data)=>{
  try{
    return await axios.post(`${url}/file/upload`,data)
  }catch(err){
    console.log('error while upload file',err.message)
  }
}