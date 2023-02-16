const mongoose = require('mongoose');
const { Schema, model} = mongoose;

const UserSchema = new Schema(
    {
        email: { type: String, required: true, unique: true},
        password: {type: String, required: true},
        isRecruteur: {type: Boolean, value: false},
        isDeveloppeur: {type: Boolean, value:false},
    },
    {
        timestamps: true
    },   
)

const UserModel = model('User', UserSchema);
module.exports = UserModel;