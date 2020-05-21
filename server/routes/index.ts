import { Router } from 'https://deno.land/x/oak/mod.ts';

import { getUser, signInUser, signUpUser, updateUser, deleteUser } from '../controllers/userController.ts';

import {
    getExercises,
    getExercise,
    createExercise,
    updateExercise,
    deleteExercise,
} from '../controllers/exerciseController.ts';

import {
    getRoutines,
    getRoutine,
    createRoutine,
    updateRoutine,
    deleteRoutine,
} from '../controllers/routineController.ts';

import {
    getRoutineExercises,
    getRoutineExercise,
    createRoutineExercise,
    updateRoutineExercise,
    deleteRoutineExercise,
} from '../controllers/routineExerciseController.ts';

import {
    getWorkouts,
    getWorkout,
    createWorkout,
    updateWorkout,
    deleteWorkout,
} from '../controllers/workoutController.ts';

import {
    getWorkoutExercises,
    getWorkoutExercise,
    createWorkoutExercise,
    updateWorkoutExercise,
    deleteWorkoutExercise,
} from '../controllers/workoutExerciseController.ts';

const router = new Router();

const api = '/api/v1/';

router
    .get(api + 'users/:id', getUser)
    .post(api + 'users', signUpUser)
    .post(api + 'users/sign-in', signInUser)
    .put(api + 'users/:id', updateUser)
    .delete(api + 'users/:id', deleteUser)

    .get(api + 'exercises', getExercises)
    .get(api + 'exercises/:id', getExercise)
    .post(api + 'exercises', createExercise)
    .put(api + 'exercises/:id', updateExercise)
    .delete(api + 'exercises/:id', deleteExercise)

    .get(api + 'routines', getRoutines)
    .get(api + 'routines/:id', getRoutine)
    .post(api + 'routines', createRoutine)
    .put(api + 'routines/:id', updateRoutine)
    .delete(api + 'routines/:id', deleteRoutine)

    .get(api + 'routine-exercises', getRoutineExercises)
    .get(api + 'routine-exercises/:id', getRoutineExercise)
    .post(api + 'routine-exercises', createRoutineExercise)
    .put(api + 'routine-exercises/:id', updateRoutineExercise)
    .delete(api + 'routine-exercises/:id', deleteRoutineExercise)

    .get(api + 'workouts', getWorkouts)
    .get(api + 'workouts/:id', getWorkout)
    .post(api + 'workouts', createWorkout)
    .put(api + 'workouts/:id', updateWorkout)
    .delete(api + 'workouts/:id', deleteWorkout)

    .get(api + 'workout-exercises', getWorkoutExercises)
    .get(api + 'workout-exercises/:id', getWorkoutExercise)
    .post(api + 'workout-exercises', createWorkoutExercise)
    .put(api + 'workout-exercises/:id', updateWorkoutExercise)
    .delete(api + 'workout-exercises/:id', deleteWorkoutExercise);

export default router;
