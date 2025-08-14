const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const fileSchema = new mongoose.Schema({
    senderemail: {
        required: true,
        type: String
    },
    recieveremail: {
        required: true,
        type: String
    },
    fileurl: {
        required : true,
        type: String
    },
    sharedAt: {
        required: true,
        type: Date,
    },
    fileType: {
        type: String
    }
},{timestamps: true});

const userSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    email:{
        required: true,
        type: String,
    },
    password: {
        required: true,
        type: String,
    },
    profilePic: {
        type: String,
        default : 'https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTAxL3JtNjA5LXNvbGlkaWNvbi13LTAwMi1wLnBuZw.png'
    },
    files:{
        type : [fileSchema],
        default: []
    }
}
    , {timestamps: true})

    userSchema.pre('save', async function(next) {
        // convert password String to hash format
        const user = this;
        if (user.isModified('password')) {
            user.password = await bcrypt.hash(user.password, 10);
        }
        next();
    })
    module.exports = mongoose.model('User', userSchema);