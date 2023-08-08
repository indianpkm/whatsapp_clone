import express from "express";
const app=express();
const PORT=8000;
import Connection from './database/db.js';
import Route from './routes/route.js';
import cors from 'cors';
import bodyParser from 'body-parser';

Connection();
app.use(cors());
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:false}))
app.use('/',Route)
app.listen(PORT,()=>{
    console.log('server start ')
})
