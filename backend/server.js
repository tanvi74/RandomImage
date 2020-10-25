const express = require('express');
const app = express();
const mongoDb = require('./config/db');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

dotenv.config();
app.use(bodyParser.urlencoded({extended: false}));

// Import Routes
const imageRoute= require('./routes/image');

// Connect to db
mongoDb();

// Middleware
app.use(express.json());
app.use(cors());

// Route Middlewares
app.use('/api/image', imageRoute);

app.listen(5000, ()=> console.log("Server is running") )