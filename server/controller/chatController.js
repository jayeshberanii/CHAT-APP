const asyncHandler = require("express-async-handler");
const Chat = require("../models/chatModel");
const User = require("../models/userModel");

//access chat
const accessChat = asyncHandler(async (req, res) => {
  const { userId } = req.body;
  if (!userId) {
    res.status(404).json({ msg: "userId not sent with params" });
  } else {
    var isChat = await Chat.find({
      isGroupChat: false,
      $and: [
        { users: { $elemMatch: { $eq: req.user } } },
        { users: { $elemMatch: { $eq: userId } } },
      ],
    })
      .populate("users", "password name")
      .populate("latestMessage");    

    isChat = await User.populate(isChat, {
      path: "latestMessage.sender",
      select: "name pic email",
    });
    
    if (isChat.length > 0) {
      res.json(isChat);
    } else {
      const createNewChat = {
        chatName: "sender",
        isGroupChat: false,
        users: [req.user, userId],
      };
      try {
        const newChat = await new Chat(createNewChat);
        newChat.save();
        const fullChat = await Chat.find({ _id: newChat._id }).populate(
          "users",
          "password"
        );
        res.status(200).json(fullChat);
      } catch (error) {
        console.log(error.message);
        res.status(500).json({ msg: error.message });
      }
    }
  }
});

//fetch chat
const fetchChat = asyncHandler(async (req, res) => {
  try {
    await Chat.find({ users: { $elemMatch: { $eq: req.user } } })
      .populate("users", "name email pic")
      .populate("latestMessage")
      .sort({ updatedAt: -1 })
      .then(async (result) => {
        if (result.length > 0) {
          result = await User.populate(result, {
            path: "latestMessage.sender",
            select: "name pic email",
          });
          res.status(200).json(result);
        } else {
          res.status(404).json({ msg: "no chat found" });
        }
      });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ msg: error.message });
  }
});

module.exports = {
  accessChat,
  fetchChat,
};
