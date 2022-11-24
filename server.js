// Import
const express = require('express');
require('dotenv').config();
const workoutsRoutes = require('./routes/workouts');
const mongoose = require("mongoose");
const cors = require('cors');

// 5. connect mongoDb
mongoose.connect(process.env.MONGODB_URL)
    .then(() => {
        console.log('App Connection');
        // Listen For request
        app.listen(process.env.PORT, () => {
            console.log('Connected to db & listening on port', process.env.PORT)
        })
    })
    .catch((err) => {
        console.log(err);
    });

// 1. Express app

const app = express();

app.use(express.json());
app.use(cors());
// 3. routes
app.use('/api/workouts', workoutsRoutes);