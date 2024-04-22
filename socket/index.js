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

io.on('connection', (socket) => {
    console.log('user Connected', socket.id);

    socket.on('addUsers', userData => {
        console.log('addUsers called');
        addUser(userData, socket.id)
        io.emit("getUsers", users)
        console.log("data sent")
    })
})