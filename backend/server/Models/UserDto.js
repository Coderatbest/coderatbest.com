const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const User = new Schema({
    UserName:{
        type:String,
        require:true
    },
    Password:{
        type:String,
        require:true,
    },
    CreatedDate:{
        type:Date,
        default:new Date()
    },
    Name:{
        type:String,
        require:true
    },
    LastName:{
        type:String,
        require:true
    }
});
const model = mongoose.model('Users',User);

module.exports=model

//example model populated
//const model= new Schema({
//User:{
//    type: Schema.ObjectId,
//    ref: 'User'
//}})

//muler
// package for files