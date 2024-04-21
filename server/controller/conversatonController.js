import Conversation from "../model/Conversation.js";

export const getConversation = async (req, res) => {
    try {
        const {senderId, receiverId} = req.body;
        const conversation = await Conversation.findOne({members: {$all: [senderId, receiverId]}})
        if(conversation){
            return res.status(200).json(conversation)
        } else {
            const newConversation = new Conversation({
                members: [senderId, receiverId],
            })
            await newConversation.save();
            return res.status(200).json(newConversation)
        }
    } catch (error) {
        return res.status(500).json(error.message)
    }
}
