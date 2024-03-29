const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    email:{type:String, required:[true, 'Email is required!'], unique:true, minLength: [10, 'Email should have at least 10 characters!']},
    password:{type:String, required:[true, 'Password is required!'], minLength: [4, 'Password should have at least 4 characters!']}
});

userSchema.virtual('repeatPassword').set (function (value) {
    if (value !== this.password) {
        throw new Error ("Password mismatch !");
    }
});

userSchema.pre ('save', async function () {                                         
    const hash = await bcrypt.hash(this.password, 10);  
    this.password = hash
});

const User = mongoose.model('User', userSchema);

module.exports = User;