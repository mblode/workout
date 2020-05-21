import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './Home';
import Profile from './Profile';
import Settings from './Settings';
import SignIn from './SignIn';
import SignUp from './SignUp';
import ForgotPassword from './ForgotPassword';

import Routines from './Routines';
import RoutineNew from './RoutineNew';
import RoutinePage from './RoutinePage';

import Workouts from './Workouts';
import WorkoutNew from './WorkoutNew';
import WorkoutPage from './WorkoutPage';

import Exercises from './Exercises';
import ExerciseNew from './ExerciseNew';
import ExercisePage from './ExercisePage';

import NoMatch from './NoMatch';

export default function Main() {
    return (
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/profile/:id' component={Profile} />
            <Route exact path='/settings' component={Settings} />
            <Route exact path='/sign-in' component={SignIn} />
            <Route exact path='/sign-up' component={SignUp} />
            <Route exact path='/forgot-password' component={ForgotPassword} />

            <Route exact path='/workouts' component={Workouts} />
            <Route exact path='/workout/new' component={WorkoutNew} />
            <Route exact path='/workout/:id' component={WorkoutPage} />

            <Route exact path='/exercises' component={Exercises} />
            <Route exact path='/exercises/new' component={ExerciseNew} />
            <Route exact path='/exercises/:id' component={ExercisePage} />

            <Route exact path='/routines' component={Routines} />
            <Route exact path='/routines/new' component={RoutineNew} />
            <Route exact path='/routines/:id' component={RoutinePage} />
            <Route component={NoMatch} />
        </Switch>
    );
}
