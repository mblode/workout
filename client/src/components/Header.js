import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Header() {
    return (
        <header>
            <nav>
                <Link to='/'>
                    <div>Workout</div>
                </Link>

                <div>
                    <ul>
                        <NavLink exact={true} to='/'>
                            <span>Home</span>
                        </NavLink>

                        <NavLink to='/workouts'>
                            <span>Workouts</span>
                        </NavLink>

                        <NavLink to='/exercises'>
                            <span>Exercises</span>
                        </NavLink>

                        <NavLink to='/routines'>
                            <span>Routines</span>
                        </NavLink>

                        <NavLink to='/settings'>
                            <span>Settings</span>
                        </NavLink>

                        <NavLink to='/sign-in'>
                            <span>Sign in</span>
                        </NavLink>

                        <NavLink to='/sign-up'>
                            <span>Sign up</span>
                        </NavLink>
                    </ul>
                </div>
            </nav>
        </header>
    );
}
