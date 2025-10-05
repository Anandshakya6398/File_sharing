const express = require('express');
const User = require('../models/userModel');
const Verification = require('../models/verificationModel');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
const multer = require('multer');
const responseFunction = require('../utils/responseFunction');
const fs = require('fs');
const errorHandler = require('../middlewares/errorMiddleware');
const authTokenHandler = require('../middlewares/checkAuthToken');
const { send } = require('process');



async function mailer(recieveremail, filesenderemail) {
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
        subject: "new file shared with you",
        text: `A new file has been shared with you by ${filesenderemail}`,
        html: `<b>A new file has been shared with you by ${filesenderemail}</b>`,

    });

    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
}

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public');
    },
    filename: (req, file, cb) => {
        let fileType = file.mimetype.split('/')[1];
        console.log(req.headers.filename);
        cb(null, `${Date.now()}.${fileType}`);
    }
});

const upload = multer({ storage: storage });

const fileUploadFunction = (req, res, next) => {
    upload.single('clientFile')(req, res, (err) => {
        if (err) {
            return responseFunction(res, 400, "File upload failed", null, false);
        }
        next();
    });
};

router.get('/test', (req, res) => {
    res.send('file route is working');
});

router.post('/sharefile', authTokenHandler, fileUploadFunction, async (req, res, next) => {
    try {
        const { senderemail, recieveremail, filename } = req.body;
        console.log(req.body);
        let senderuser = await User.findOne({ email: senderemail });
        if (!senderuser) {
            if (req.file && req.file.path) {
                fs.unlink(req.file.path, (err) => {
                    if (err) {
                        console.log(err);
                    }
                    else {
                        console.log('File deleted successfully');
                    }
                })
            }
            return responseFunction(res, 400, "Sender email not registered", null, false);
        }
        let recieveruser = await User.findOne({ email: recieveremail });
        if (!recieveruser) {

            if (req.file && req.file.path) {
                fs.unlink(req.file.path, (err) => {
                    if (err) {
                        console.log(err);
                    }
                    else {
                        console.log('File deleted successfully');
                    }
                })
            }

            return responseFunction(res, 400, "Reciever email not registered", null, false);
        }
        senderuser.files.push({
            senderemail: senderemail,
            recieveremail: recieveremail,
            fileurl: req.file.path,
            filename: filename,
            sharedAt: Date.now()
        });
        recieveruser.files.push({
            senderemail: senderemail,
            recieveremail: recieveremail,
            fileurl: req.file.path,
            filename: filename,
            sharedAt: Date.now()
        });
        await senderuser.save();
        await recieveruser.save();
        await mailer(recieveremail, senderemail);
        responseFunction(res, 200, "File shared successfully", null, true);
    }
    catch (err) {
        next(err);
    }
})

router.use(errorHandler);

module.exports = router;




