import { Router } from 'https://deno.land/x/oak@v4.0.0/mod.ts';

import getWorkouts from '../controllers/workout/getWorkouts.ts';
import getWorkout from '../controllers/workout/getWorkout.ts';
import createWorkout from '../controllers/workout/createWorkout.ts';
import updateWorkout from '../controllers/workout/updateWorkout.ts';
import deleteWorkout from '../controllers/workout/deleteWorkout.ts';

import getExcersices from '../controllers/excersice/getExcersices.ts';
import getExercis from '../controllers/excersice/getExcersice.ts';

import getRoutines from '../controllers/routine/getRoutines.ts';
import getRoutine from '../controllers/routine/getRoutine.ts';
import createRoutine from '../controllers/routine/createRoutine.ts';
import updateRoutine from '../controllers/routine/updateRoutine.ts';
import deleteRoutine from '../controllers/routine/deleteRoutine.ts';

import getUsers from '../controllers/user/getUsers.ts';
import getUser from '../controllers/user/getUser.ts';
import signUpUser from '../controllers/user/signUpUser.ts';
import signInUser from '../controllers/user/signInUser.ts';
import updateUser from '../controllers/user/updateUser.ts';
import deleteUser from '../controllers/user/deleteUser.ts';

const router = new Router();

router
    .get('/api/v1/workouts', getWorkouts)
    .get('/api/v1/workouts/:id', getWorkout)
    .post('/api/v1/workouts', createWorkout)
    .put('/api/v1/workouts/:id', updateWorkout)
    .delete('/api/v1/workouts/:id', deleteWorkout)
    .get('/api/v1/excersices', getExcersices)
    .get('/api/v1/excersices/:id', getExercis)
    .get('/api/v1/routines', getRoutines)
    .get('/api/v1/routines/:id', getRoutine)
    .post('/api/v1/routines', createRoutine)
    .put('/api/v1/routines/:id', updateRoutine)
    .delete('/api/v1/routines/:id', deleteRoutine)
    .get('/api/v1/user', getUsers)
    .get('/api/v1/user', getUser)
    .get('/api/v1/user/:id', getUser)
    .post('/api/v1/user', signUpUser)
    .post('/api/v1/user/sign-in', signInUser)
    .put('/api/v1/user/:id', updateUser)
    .delete('/api/v1/user/:id', deleteUser);

export default router;
