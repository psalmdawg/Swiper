"use strict";
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const validateEmail= (email) => {
  return (/\S+@\S+\.\S+/).test(email)
}

const UserSchema = new Schema({
  email:{
    type: String,
    // unique: true,
    lowercase: true,
    // required: 'Email address is required',
    // validate:[validateEmail, 'Please enter a valid email']
  },
  password:{
    type:String,
    // required: true
  },
  userName:{
    type:String
  },
  timeStamp:Number,
  firstName:{
    type:String,
  },
  lastName:{
    type:String
  },
  dob:{
    type:String
  },
  mobile:{
    type:String
  },
  createdAt:{
    type:String
  },
  sex:{
    type:String
  },
  active:{
    type:Boolean,
    default:true
  },
  lastActive:{
    type:Number
  },
  location:{
    type:String
  },
  postCode:{
    type:String
  },
  orientation:{
    type:String
  },
  likedUsers:[
    {
      type:mongoose.Schema.Types.ObjectId,
      ref:'User'
    }
  ],
  likedBy:[
    {
      type:mongoose.Schema.Types.ObjectId,
      ref:'User'
    }
  ],

});


var User = mongoose.model('User', UserSchema);

module.exports = User;
