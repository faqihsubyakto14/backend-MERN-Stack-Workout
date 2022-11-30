// Import
const express = require('express');
require('dotenv').config();
const workoutsRoutes = require('./routes/workouts');
const mongoose = require("mongoose");
const cors = require('cors');

// 1. Express app
const app = express();
// Suoaya bisa meneriam data json dari client
const DB = process.env.MONGODB_URL.toString();

mongoose
    .connect(DB)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log('Connected to db & listening on port', process.env.PORT);
        });
    })
    .catch((error) => {
        console.log(error);
    })

app.use(express.json());
// Tidak error dari cors-policiy nya
app.use(cors());

// 3. routes
app.use('/api/workouts', workoutsRoutes);
