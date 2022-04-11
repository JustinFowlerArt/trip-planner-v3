
import React from 'react';
import Menu from './menu';

function Header() {
    return (
        <header className='flex flex-col md:flex-row md:justify-between p-5 primary-bg-color min-h-24' role='banner'>
            <div className='flex justify-center items-center'>
                <a href='#'><img src='/images/globe.png' className='w-12' alt='Globe Logo' /></a>
                <h1 className='text-2xl font-bold mx-6'>Trip Planner</h1>
            </div>
            <Menu />
        </header>
    );
}

export default Header;