// import React, { useState, useEffect } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import './Navbar.css';

// const Navbar = () => {
//     const [isOpen, setIsOpen] = useState(false);
//     const [activeItem, setActiveItem] = useState('');
//     const location = useLocation();

//     useEffect(() => {
//         const currentPath = location.pathname.split('/')[1]; // Get the first part of the path
//         setActiveItem(currentPath || 'home'); // If no path is provided, set it to 'home'
//     }, [location.pathname]);

//     const toggleMenu = () => {
//         setIsOpen(!isOpen);
//     };

//     return (
//         <nav className="navbar">
//             <div className="navbar-logo">Logo</div>

//             <div className={`navbar-menu ${isOpen ? 'open' : ''}`}>
//                 <Link
//                     to="/home"
//                     className={`nav-link ${activeItem === 'home' ? 'active' : ''}`}
//                     onClick={() => setActiveItem('home')}
//                 >
//                     Home
//                 </Link>
//                 <Link
//                     to="/about"
//                     className={`nav-link ${activeItem === 'about' ? 'active' : ''}`}
//                     onClick={() => setActiveItem('about')}
//                 >
//                     About
//                 </Link>
//                 <Link
//                     to="/services"
//                     className={`nav-link ${activeItem === 'services' ? 'active' : ''}`}
//                     onClick={() => setActiveItem('services')}
//                 >
//                     Services
//                 </Link>
//                 <Link
//                     to="/contact"
//                     className={`nav-link ${activeItem === 'contact' ? 'active' : ''}`}
//                     onClick={() => setActiveItem('contact')}
//                 >
//                     Contact
//                 </Link>
//             </div>
//             <div className={`navbar-buttons ${isOpen ? 'open' : ''}`}>
//                 <button>Login</button>
//                 <button>Sign Up</button>
//             </div>

//             <div className="navbar-hamburger" onClick={toggleMenu}>
//                 {isOpen ? (
//                     <span>&#8592;</span>
//                 ) : (
//                     <span>&#9776;</span>
//                 )}
//             </div>
//         </nav>
//     );
// };

// export default Navbar;


