import Conversation from "../model/Conversation.js";

export const addConversation = async (req, res) => {
    try {
        const {senderId, receiverId} = req.body;
        const exist = await Conversation.findOne({members: {$all: [senderId, receiverId]}})
        if(exist){
            return res.status(200).json("conversation already exist")
        }
        const newConversation = new Conversation({
            members: [senderId, receiverId],
        })
        await newConversation.save();
        return res.status(200).json("Conversation created successfully")
    } catch (error) {
        return res.status(500).json(error.message)
    }
}

export const getConversation = async (req, res) => {
    try {
        const {senderId, receiverId} = req.body;
        const conversation = await Conversation.findOne({members: {$all: [senderId, receiverId]}})
        return res.status(200).json(conversation)

    } catch (error) {
        return res.status(500).json(error.message)
    }
}