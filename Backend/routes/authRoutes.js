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

async function mailer(recieveremail, code){
    let transporter = nodemailer.getTransporter({
    host:"smtp.gmail.com",
    port: process.env.EMAIL_PORT,
    secure: false,
    requireTLS: true,
    auth:{
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
})
}


router.get('/test', (req, res) => {
    res.send('Test route is working');
});

module.exports = router;




