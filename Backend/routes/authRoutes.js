const express = require('express');
const User = require('../models/userModel');
const Verification = require('../models/verificationModel');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const nodemailer = require('nodemailer');
const responseFunction = require('../utils/responseFunction');
const fs = require('fs');
const errorHandler = require('../middlewares/errorMiddleware');
const authTokenHandler = require('../middlewares/checkAuthToken');

async function mailer(recieveremail, code) {
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: process.env.EMAIL_PORT,
        secure: false,
        requireTLS: true,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    })
    let info = await transporter.sendMail({
        from: "Team FileShare",
        to: recieveremail,
        subject: "Email Verification",
        text: `Your verification code is: ${code}`,
        html: `<b>Your verification code is: ${code}</b>`,

    });

    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
}

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, '/public');
    },
    filename: (req, file, cb) => {
        let fileType = file.mimetype.split('/')[1];
        console.log(req.headers.filename);
        cb(null, `file_${Date.now()}.${fileType}`);
    }
});

const upload = multer({ storage: storage });

const fileUploadFunction = (req, res, next) => {
    upload.single('clientFile')(req, res, (err) => {
        if (err) {
            return responseFunction(res, 400, "File upload failed", false, null);
        }
        next();
    });
};

router.get('/test', (req, res) => {
    res.send('Test route is working');
    mailer("amauryashaky198@gmail.com", "123456");
});

router.post('/sendotp', async (req, res) => {
    const { email } = req.body;
    if (!email) {
        return responseFunction(res, 400, "Email is required", null, false);
    }
    try {
        const code = Math.floor(100000 + Math.random() * 900000);
        await mailer(email, code);
        await Verification.findOneAndDelete({ email: email });
        const newVerification = new Verification({
            email: email,
            code: code
        });
        await newVerification.save();
        return responseFunction(res, 200, "OTP sent to your email", null, true);
    }
    catch (error) {
        console.error("Error in /sendotp:", error);
        return responseFunction(res, 500, "Internal Server Error", null, false);
    }

});

router.post('/signup', async (req, res, next) => {
    try {
        const { name, email, password, otp, profilePic } = req.body;
        let user = await User.findOne({ email: email });
        if (user) {
            return responseFunction(res, 400, "User already exists", null, false);
        }
        const verificationRecord = await Verification.findOne({ email: email });
        if (!verificationRecord) {
            return responseFunction(res, 400, "Invalid or expired verification code", null, false);
        }
        const isMatch = await bcrypt.compare(otp, verificationRecord.code);
        if (!isMatch) {
            return responseFunction(res, 400, "Invalid OTP", null, false);
        }

        user = new User({
            name: name,
            email: email,
            password: password,
            profilePic: profilePic
        });
        await user.save();
        await Verification.deleteOne({ email: email });
        return responseFunction(res, 200, "User registered successfully", null, true);
    }
    catch (error) {
        console.error("Error in /signup:", error);
        return responseFunction(res, 500, "Internal Server Error", null, false);
    }

});

router.post('/login', async (req, res, next) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return responseFunction(res, 400, "Email and password are required", null, false);
        }
        const user = await User.findOne({ email: email });
        if (!user) {
            return responseFunction(res, 400, "Invalid email or password", null, false);
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return responseFunction(res, 400, "Invalid email or password", null, false);
        }
        const authToken = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '10m' });
        const refreshToken = jwt.sign({ userId: user._id }, process.env.JWT_REFRESH_SECRET, { expiresIn: '7d' });
        res.cookie('authToken', authToken, {
            sameSite: 'none',
            secure: true,
            httpOnly: true,
            maxAge: 10 * 60 * 1000 // 10 minutes
        });
        res.cookie('refreshToken', refreshToken, {
            sameSite: 'none',
            secure: true,
            httpOnly: true,
            maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
        });
        return responseFunction(res, 200, "Login successful", {
            authToken: authToken,
            refreshToken: refreshToken
        }, true);
    }
    catch (error) {
        console.error("Error in /login:", error);
        return responseFunction(res, 500, "Internal Server Error", null, false);
    }

});

router.get('/checklogin', authTokenHandler, async (req, res, next) => {
    res.json({
        ok: req.ok,
        message: req.message,
        userId: req.userId
    })
})

router.post('/logout', authTokenHandler, async (req, res, next) => {
    res.clearCookie('authToken');
    res.clearCookie('refreshToken');
    res.json({
        ok: true,
        message: 'Logged out successfully'
    })
})



module.exports = router;




