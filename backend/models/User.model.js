// user.js

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    username : {
        type: String,
        required: true,
        unique: true
    },
    phoneNumber: String,
    createdAt: {
        type: Date,
        default: Date.now
    },
    books: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Book'
    }],
    cart :[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Book'
    }],
    address: {
        type: String,
        default: null
    },
    orders:[{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'Book'
    }]
});


const User = mongoose.model('User', userSchema);

module.exports = User;
