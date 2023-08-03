const router = require('express').Router()
const fileUploader = require('../config/uploader');
const wedControllers = require('../app/controllers/wedControllers')
const middlewareControllers = require('../app/controllers/middlewareControllers')

router.post('/add-new-wedsite',  middlewareControllers.verifyToken, fileUploader.single('image'), wedControllers.addNewWedsite)

module.exports = router 