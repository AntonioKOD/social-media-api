const Thought = require('../models/Thought')
const User = require('../models/User')


module.exports = {
    async getAllThoughts(req,res){
        try{
            const getThoughts = await Thought.find()
            res.status(200).json(getThoughts)
        }catch(err){
            res.status(500).json(err)
        }
    },
    async singleThought(req,res){
        try{
            const oneThought = await Thought.findOne({_id: req.params.thoughtId})
            res.status(200).json(oneThought)
        }catch(err){
            res.status(500).json(err)
        }
    },
    async addThought(req,res){
        try{
            const newThought = await Thought.create(req.body)
            const addToUser = await User.findOneAndUpdate({_id: req.body.userId},
                {$push: {thoughts: newThought._id}},
                {new: true}
            )
            res.status(200).json("You just added a thought")

        }catch(err){
            res.status(500).json(err)
        }
    },
    async updateThought(req,res){
        try{
            const updatedThought = await Thought.findOneAndUpdate({_id: req.params.thoughtId}, {$set:req.body})
            res.status(200).json(updatedThought)
        }catch(err){
            res.status(500).json(err)
        }
    },
    async deleteThought(req,res){
        try{
            const deletedThought = await Thought.findOneAndDelete({_id: req.params.thoughtId})
            res.status(200).json(deletedThought)
        }catch(err){
            res.status(500).json(err)
        }
    },
    async addReaction(req,res){
        try{
            const newReaction = await Thought.findOneAndUpdate({_id: req.params.thoughtId}, 
                {$addToSet: {reactions: req.body}},
                {new:true}
            )
            res.status(200).json(newReaction)
        }catch(err){
            res.status(500).json(err)
        }
    },
    async removeReactions(req,res){
        try{
            const deleteReaction = await Thought.findOneAndUpdate({_id: req.params.thoughtId},
                {$pull: {reactions: {reactionId: req.params.reactionId}}},
                {new: true}
            )
            res.status(200).json(deleteReaction)
        }catch(err){
            res.status(200).json(err)
        }
    }
}