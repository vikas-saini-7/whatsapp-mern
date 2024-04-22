import {Server} from "socket.io"

const PORT = 9000

const io = new Server(PORT, {
    cors: {
        origin: 'http://localhost:3000'
    }
})

let users = []

const addUser = (userData, socketId) => {
    !users.some(user => user.sub == userData.sub) && users.push({...userData, socketId})
}

const getUser = (userId) => {
    return users.find(user => user.sub === userId);
}

io.on('connection', (socket) => {
    console.log('user Connected', socket.id);

    // add data to users array and sending to client for active status 
    socket.on('addUsers', userData => {
        // console.log('addUsers called');
        addUser(userData, socket.id)
        io.emit("getUsers", users)
        // console.log("data sent")
    })

    // sending message 
    socket.on("sendMessage", data => {

        console.log(data)
        console.log('sendMessage called');
        const user  = getUser(data.receiverId);
        console.log(user)
        io.to(user.socketId).emit('getMessage', data)
    })
})