import React from 'react'
import './Nav.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const Nav = () => {
    const [dropdownOpen, setDropdownOpen] = useState(true);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    return (
        <nav>
            <div className="nav-container sticky-top">
                <div className="logo-container">
                    <a href=""><img src="/logo.png" alt="logo" /></a>
                </div>
                <div className="menu-container">
                    <Link to=''>Episodes</Link>
                    <Link to=''>About</Link>
                    <div className="dropdown">
                        <a className="dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            More
                        </a>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">Action</a></li>
                            <li><a className="dropdown-item" href="#">Another action</a></li>
                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </div>

                </div>
                <div className="button-container">
                    <div className='order-lg-1 order-2'><a className='nav-sec-btn me-3'>RECENT EPISODES</a></div>
                    <div className='order-lg-2 order-1'><a className='nav-primary-btn'>SUBSCRIBE</a></div>

                </div>
            </div>
        </nav>
    )
}

export default Nav
