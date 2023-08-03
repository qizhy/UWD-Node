
const Wed = require('../models/wed')

class wedControllers {

    async updateView (req, res) {
        try {
            await Wed.updateOne({ _id: req.body.id }, { view : req.body.view })
            res.json({code : 200, message : 'success'})
        } catch (error) {
            res.json({code : 500, message : 'fail'})
        }
    }

    async updateLike (req, res) {
        try {
            await Wed.updateOne({ _id: req.body.id }, { like : req.body.likes })
            res.json({code : 200, message : 'success'})
        } catch (error) {
            res.json({code : 500, message : 'fail'})
        }
    }

    async addNewWedsite (req, res) {
        try {
            const wed = await new Wed ({
                title : req.body.title,
                url : req.body.url,
                url_image : req.file.path,
                user_id : req.user_id,
                view : 0,
                like : 0
            })
            await wed.save()
            res.json({code : 200,message : 'success'})
        } catch (error) {
            res.json(error)
        }
    }

    async getAllWedsite (req, res) {
        try {
            const weds = await Wed.find({})
            res.json({code : 200, weds})
        } catch (error) {
            res.json(error)
        }
    }

}

module.exports = new wedControllers