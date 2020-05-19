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

                        <NavLink to='/beers' className='nav-link' activeClassName='active'>
                            <span>Beers</span>
                        </NavLink>
                    </ul>
                </div>
            </nav>
        </header>
    );
}
