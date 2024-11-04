const User = require('../models/User')

module.exports = {
    async getAllUsers(req, res) {
        try {
            const users = await User.find();
            res.json(users)
        } catch (err) {
            res.status(500).json(err)
        }
    },
    async getUser(req, res) {
        try {
            const user = await User.findOne({ _id: req.params.userId })
            res.json(user)
        } catch (err) {
            res.status(500).json(err)
        }
    },
    async addUser(req, res) {
        try {
            const newUser = await User.create(req.body);
            res.json(newUser)
        } catch (err) {
            res.status(500).json(err)
        }
    },
    async updateUser(req, res) {
        try {
            const updatedUser = await User.findOneAndUpdate({ _id: req.params.userId }, {$set: req.body})
            res.json(updatedUser)
        } catch (err) {
            res.status(500).json(err)
        }
    },
    async deleteUser(req, res) {
        try {
            const deletedUser = await User.findOneAndDelete({ _id: req.params.userId })

            res.json(deletedUser)
        } catch (err) {
            res.status(500).json(err)
        }
    },

    async addFriend(req, res) {
        try {
            const newFriend = await User.findByIdAndUpdate({ _id: req.params.userId }, { $push: { friends: req.params.friendId } })
            res.json(newFriend)
        } catch (err) {
            res.status(500).json(err)
        }
    },
    async removeFriend(req, res) {
        try {
            const deleteFriend = await User.findByIdAndDelete(
                {_id: req.params.userId},
                {$push: {friends: req.params.friendId}}
            )
            res.json(deleteFriend)
        }catch(err){
            res.status(500).json(err)
            console.log(err)
        }
    }

}