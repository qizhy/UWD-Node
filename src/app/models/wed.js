
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Weds = new Schema ({
    title :{
        type : String,
        unique : true ,
        require : true
    },
    url :{
        type : String,
        unique : true ,
        require : true
    },
    URL_image : {
        type : String,
        require : true,
        default : ''
    }
}, {timestamps : true})
module.exports = mongoose.model('weds', Weds)