const express = require('express');
const router = express();
const { createWorkout, getWorkouts, getWorkout, updateWork, deleteWork } = require('../controller/workoutController.js');

// get All Workout
router.get("/", getWorkouts);
// get single Workout
router.get("/:id", getWorkout);
// Create a new Workouts 
router.post('/', createWorkout);
// Update a New Workout
router.put("/:id", updateWork);
// Update a New Workout
router.delete("/:id", deleteWork);

module.exports = router;