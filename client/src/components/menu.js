
import React, { useState } from "react";

function Menu() {
    const [navbarOpen, setNavbarOpen] = useState(false)

    const handleToggle = () => {
        setNavbarOpen(!navbarOpen)
    }
      
    return (
    <nav className='flex justify-center' role='navigation'>
        <button onClick={handleToggle} className='absolute right-6 top-5 text-4xl md:hidden'>
            <a href='#'><i className='fa fa-bars'></i></a>
        </button>
        <ul className={`${navbarOpen ? "flex" : "hidden"} flex-col items-center tex md:flex-row md:flex`}>
            <li className='p-2 text-xl underline md:block hover:primary-color hover:bg-white hover:rounded'>
                <a href='#'>Features</a>
            </li>
            <li className='p-2 text-xl underline md:block md:ml-3 hover:primary-color hover:bg-white hover:rounded'>
                <a href='#'>Pricing</a>
            </li>
            <li className='p-2 text-xl underline md:block md:ml-3 hover:primary-color hover:bg-white hover:rounded'>
                <a href='#'>Sign Up</a>
            </li>
        </ul>
    </nav>
    );
}

export default Menu;