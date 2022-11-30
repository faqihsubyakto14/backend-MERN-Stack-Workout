const Workout = require('../model/Workouts');
const mongoose = require('mongoose');

// get all Workouts
const getWorkouts = async (req, res) => {
    const workouts = await Workout.find({}).sort({ createdAt: -1 });
    res.status(200).json(workouts);
};


// get single workout
const getWorkout = async (req, res) => {
    const { id } = req.params;

    // Check Ketersediaan id di database
    if (!mongoose.Types.ObjectId(id)) return res.status(404).json({ error: "No id In The Database" });

    const workout = await Workout.findById(id);

    // Check result dari data berdasarkan id nya
    if (!workout) return res.status(404).json({ error: "No such workout" });

    res.status(200).json(workout);
};


// create workout
const createWorkout = async (req, res) => {
    const { title, load, reps } = req.body;

    let EmptyFields = [];

    if (!title) {
        EmptyFields.push('title');
    };

    if (!load) {
        EmptyFields.push('load');
    }

    if (!reps) {
        EmptyFields.push('reps');
    }

    if (EmptyFields.length > 0) {
        return res.status(400).json({ error: "Please fill in all fields", EmptyFields })
    }

    try {
        const workout = await Workout.create({ title, load, reps });
        res.status(200).json(workout);
    } catch (error) {
        res.status(200).json({ error: error.message });
    }
}


// delete Workout
const deleteWork = async (req, res) => {
    const { id } = req.params;

    // Check Ketersediaan id di database
    if (!mongoose.Types.ObjectId(id)) return res.status(404).json({ error: "No id In The Database" });

    const workout = await Workout.findByIdAndDelete({ _id: id });

    if (!workout) return res.status(404).json({ error: "No Such workout" });

    res.status(200).json(workout);
};


// update workout
const updateWork = async (req, res) => {
    const { id } = req.params;
    console.log(req.body);
    if (!mongoose.Types.ObjectId(id)) return res.status(404).json({ error: "No id In The Database" });

    const workout = await Workout.findOneAndUpdate({ _id: id }, {
        ...req.body
    });

    if (!workout) return res.status(400).json({ error: "No Such workout" });

    res.status(200).json(workout);
};

module.exports = { getWorkouts, getWorkout, createWorkout, deleteWork, updateWork };