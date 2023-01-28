// const crypto = require('crypto');
import mongoose from 'mongoose';


//  const validator = require('validator');
// const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Please Enter Your Name'],
        unique: true
    },
    email: {
        type: String,
        required: [true, 'Please Provide Your Email'],
        unique: true,
        lowercase: true,
    },
    country: {
        type: String,
        required: true,
    },
    img: {
        type: String
    },
    city: {
        type: String,
        required: true
    },
    phone:{
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        default: 'false'
    },
    password: {
        type: String,
        required: [true, 'Please Provide a Password'],
        minlenght: 8,
        // select: false
    },
    },
    {timestamps: true}
   
    // passwordResetToken: String,
    // passwordChangedAt: Date,
    // passwordResetExpires: Date,
    // active: {
    //     type: Boolean,
    //     default: true,
    //     select: false
    // }


);

export default mongoose.model("User", UserSchema)