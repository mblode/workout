import React from 'react';
import { Link } from 'react-router-dom';

export default function Beers() {
    return (
        <div>
            <h1 className='h1'>Beers</h1>
            <Link to='/'>Return home</Link>
        </div>
    );
}
