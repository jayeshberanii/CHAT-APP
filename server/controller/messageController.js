const asyncHandler = require("express-async-handler");
const Chat = require("../models/chatModel");
const Message = require("../models/messageModel");
const User = require("../models/userModel");

//send message
const sendMessage = asyncHandler(async (req, res) => {
    const { content, chatId } = req.body
    try {
        if (chatId === undefined || content === undefined) {
            res.status(404).json({ msg: "some fields are missing!" })
        } else {
            var message = await Message.create({
                sender: req.user,
                content,
                chat: chatId
            })
            message = await message.populate('sender', 'name pic')
            message = await message.populate('chat')
            message = await User.populate(message, {
                path: "chat.users",
                select: 'name pic email'
            })
            await Chat.findByIdAndUpdate(chatId, {
                latestMessage: message
            })
            res.status(200).json(message)
        }
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ msg: error.message });
    }
})

//all messages
const allMessages = asyncHandler(async (req, res) => {

    try {
        const chatId = req.params.chatId
        const messages = await Message.find({ chat: chatId })
        res.json(messages)
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ msg: error.message });
    }
})

module.exports = {
    sendMessage,
    allMessages
}