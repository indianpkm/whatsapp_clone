import {Server} from 'socket.io';

const io = new Server(9000,{
    cors:{
        origin:"http://localhost:3000"
    }
})
let users=[];
const addUser=(userData,socketId)=>{
    !users.some(user=>user.sub===userData.sub)&& users.push({...userData,socketId})
}

const getUser=(userId)=>{
    return users.find(user=>user.sub===userId)
}

io.on('connection',(socket)=>{
    console.log('user connected')
    socket.on('addUsers',userData=>{
        addUser(userData,socket.id);
        io.emit('onlineUser',users);
    })
     socket.on('sendMessage',data=>{
        const user=getUser(data.receiverId)
        // console.log('user '+user.socketId)
        if(user){
            io.to(user.socketId).emit('getMessage',data)
        }
    })
    
    socket.on('sendMessage',data=>{
        const user=getUser(data.senderId)
        if(user){
            io.to(user.socketId).emit('getMessage',data)
        }
    })
    socket.on('disconnect', () => {
        // console.log('user disconnected')
        const disconnectedUser = users.find((user) => user.socketId === socket.id);
        if (disconnectedUser) {
          users = users.filter((user) => user.socketId !== socket.id);
        //   console.log('User Disconnected:', disconnectedUser);
          io.emit('onlineUser', users);
        }
    });
})