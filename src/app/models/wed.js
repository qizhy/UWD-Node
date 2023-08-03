
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
    url_image : {
        type : String,
        require : true,
        default : ''
    },
    user_id : {
        type : String,
        require : true
    },
    view : {
        type : Number,
        require : true
    },
    like : {
        type : Number,
        require : true
    }
}, {timestamps : true})
module.exports = mongoose.model('weds', Weds)