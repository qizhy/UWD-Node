const router = require('express').Router()
const fileUploader = require('../config/uploader');
const wedControllers = require('../app/controllers/wedControllers')
const fileUploader = require('../config/uploader');

router.post('/add-new-wedsite',  middlewareControllers.verifyToken, fileUploader.single('image'), wedControllers.addNewWedsite)

module.exports = router 