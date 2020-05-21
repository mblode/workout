import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Header() {
    return (
        <header>
            <nav>
                <Link to='/' className='navbar-brand'>
                    <div>Workout</div>
                </Link>

                <div className='navbar-wrap'>
                    <ul className='mx-auto'>
                        <NavLink exact={true} to='/' className='nav-link' activeClassName='active'>
                            <span>Home</span>
                        </NavLink>

                        <NavLink to='/workouts' className='nav-link' activeClassName='active'>
                            <span>Workouts</span>
                        </NavLink>

                        <NavLink to='/exercises' className='nav-link' activeClassName='active'>
                            <span>Exercises</span>
                        </NavLink>

                        <NavLink to='/routines' className='nav-link' activeClassName='active'>
                            <span>Routines</span>
                        </NavLink>

                        <NavLink to='/settings' className='nav-link' activeClassName='active'>
                            <span>Settings</span>
                        </NavLink>

                        <NavLink to='/sign-in' className='nav-link' activeClassName='active'>
                            <span>Sign in</span>
                        </NavLink>

                        <NavLink to='/sign-up' className='nav-link' activeClassName='active'>
                            <span>Sign up</span>
                        </NavLink>
                    </ul>
                </div>
            </nav>
        </header>
    );
}
