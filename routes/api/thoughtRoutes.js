const router = require('express').Router()
const {getAllThoughts, singleThought, addThought, updateThought, deleteThought, addReaction, removeReactions} = require('../../controllers/thoughtController')

router.route('/').get(getAllThoughts).post(addThought);
router.route('/:thoughtId').get(singleThought).put(updateThought).delete(deleteThought)
router.route('/:thoughtId/reactions').post(addReaction);
router.route('/:thoughtId/reactions/:reactionId').delete(removeReactions);


module.exports = router