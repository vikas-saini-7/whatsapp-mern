import mongoose from "mongoose";

const messageSchema = mongoose.Schema({
    senderId: {
        type: String
    },
    receiverId: {
        type: String
    },
    conversationId: {
        type: String
    },
    type: {
        type: String
    },
    text: {
        type: String
    }},
    {
        timestamps: true
    }
);

const Message = mongoose.model("message", messageSchema);

export default Message;

// senderId: user.sub,
// receiverId: person.sub,
// conversationId: conversation._id,
// type: "text",
// text: messageText