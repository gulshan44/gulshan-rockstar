import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Function to toggle the menu
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Function to close the menu when a link is clicked
    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <>

            <nav id='navbar' className="navbar navbar-expand-lg py-3">
                <div className="container">
                    <Link id='logo' className="navbar-brand" to="/"><img src='/Rockstar-logo.png' alt='Logo' /></Link>
                    <Link to='/' className='rockstar'>GULSHAN ROCKSTAR</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded={isMenuOpen ? 'true' : 'false'} aria-label="Toggle navigation" onClick={toggleMenu}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" viewBox="0 0 30 30">
                            <path stroke="white" stroke-width="2" d="M4 7h22M4 15h22M4 23h22" />
                        </svg>
                    </button>
                    <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="navbarNavDropdown">
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/" onClick={closeMenu}>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="gallery" onClick={closeMenu}>Gallery</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="profile" onClick={closeMenu}>Profile</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown link
                                </Link>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <li><Link className="dropdown-item" to="#">Action</Link></li>
                                    <li><Link className="dropdown-item" to="#">Another action</Link></li>
                                    <li><Link className="dropdown-item" to="#">Something else here</Link></li>
                                </ul>
                            </li>
                        </ul>
                        <span class="navbar-text">
                            <Link to='/'><button class="btn btn-sm btn-outline-secondary rounded-pill" type="button">Login/Rgister</button></Link>
                        </span>
                    </div>
                    {/* <button class="btn btn-sm btn-outline-secondary rounded-pill" type="button">Login/Rgister</button> */}
                </div>
            </nav>



        </>
    )
}

export default Navbar