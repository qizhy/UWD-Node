const router = require('express').Router()
const fileUploader = require('../config/uploader');
const wedControllers = require('../app/controllers/wedControllers')
const middlewareControllers = require('../app/controllers/middlewareControllers')

router.post('/add-new-wedsite',  middlewareControllers.verifyToken, fileUploader.single('image'), wedControllers.addNewWedsite)
router.get('/get-all-wedsite', wedControllers.getAllWedsite)
router.put('/update-like', wedControllers.updateLike)
router.put('/update-view', wedControllers.updateView)

module.exports = router 