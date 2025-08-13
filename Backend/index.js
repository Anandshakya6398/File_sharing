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