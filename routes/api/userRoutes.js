const router = require('express').Router()
const {getAllUsers, getUser, addUser, updateUser, deleteUser, addFriend, removeFriend} = require('../../controllers/userController.js')

router.route('/').get(getAllUsers).post(addUser);

router.route('/:userId').get(getUser).put(updateUser).delete(deleteUser);

router.route('/:userId/friends/:friendId').post(addFriend).delete(removeFriend);
module.exports = router