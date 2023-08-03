
const router = require('express').Router()
const middlewareControllers = require('../app/controllers/middlewareControllers')
const userControllers = require('../app/controllers/userControllers')
const fileUploader = require('../config/uploader');

router.get('/get-user', userControllers.getUser)
router.get('/current-user', middlewareControllers.verifyToken ,userControllers.getCurrentUser)
router.post('/upload-new-avatar', middlewareControllers.verifyToken, fileUploader.single('image') , userControllers.updateAvatar)
router.delete('/delete-avatar', middlewareControllers.verifyToken , userControllers.deleteAvatar)
router.put('/update-email', middlewareControllers.verifyToken , userControllers.updateEmail)
router.put('/update-password', middlewareControllers.verifyToken , userControllers.updatePassword)
router.put('/update-profile', middlewareControllers.verifyToken , userControllers.updateProfile)
router.put('/update-likes', middlewareControllers.verifyToken , userControllers.updateActionLike)
router.delete('/delete-user', middlewareControllers.verifyToken , userControllers.deleteUser)
module.exports = router 