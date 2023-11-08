const { Int32 } = require("mongodb");
const mongoose = require("mongoose");
const eventSchema = new mongoose.Schema({
    "name": {type:String, unique:true},
    "date": {type:Date},
    "time": {type:String},
    "place": {type:String},
    "club": {type:String},
    "description": {type:String},
    "registrationFee" : {type:Number},
    "slots": {type: Number},
    

}, {
    collection: "events-record"
})

module.exports = mongoose.model("eventSchema", eventSchema);