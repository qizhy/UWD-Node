
const Wed = require('../models/wed')

class wedControllers {

    async addNewWedsite (req, res) {
        try {
            const wed = await new Wed ({
                title : req.body.title,
                url : req.body.url,
                url_image : req.file.path
            })
            await wed.save()
            res.status(200).json({message : 'success'})
        } catch (error) {
            res.json(error)
        }
    }

}

module.exports = new wedControllers