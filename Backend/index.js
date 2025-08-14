const express = require ('express');
const http = require('http');
const socketIO = require('socket.io');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const authRoutes = require('./routes/authRoutes');
const fileShareRoute = require('./routes/fileShareRoutes');

 
require('./db') // database connection 
require('./models/userModel');
require('./models/verificationModel');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);


const allowedOrigins = [`http://localhost:3000`];
app.use(
    cors({
        origin: function (origin, callback) {
            if (!origin || allowedOrigins.includes(origin)) {
                callback(null, true);
            } else {
                callback(new Error('Not allowed by CORS'));
            }
        },
        credentials: true, // Allow credentials
    })
);


app.use(bodyParser.json());
app.use(cookieParser());
app.use('/public', express.static('public'));

app.use((req, res, next) => {
    req.io = io;
    next();
}
);

app.use('/auth', authRoutes);
app.use('/files', fileShareRoute);

app.get('/', (req, res) => {
    res.send('Welcome to the File Sharing App Backend');
});

server.listen(5000, () => {
    console.log('Server is running on port 5000');
});
