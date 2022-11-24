const mongoose = require('mongoose');
const { model, Schema } = mongoose;

let workoutSchema = new Schema(
    {
        title: {
            type: String,
            required: true
        },
        load: {
            type: Number,
            required: true
        },
        reps: {
            type: Number,
            required: true
        }
    },
    {
        timestamps: true,
    }
);


module.exports = model('workout', workoutSchema);
