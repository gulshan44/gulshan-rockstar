import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

    // const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [showModal, setShowModal] = useState(false);

    // // Function to toggle the menu
    // const toggleMenu = () => {
    //     setIsMenuOpen(!isMenuOpen);
    // };

    // // Function to close the menu when a link is clicked
    // const closeMenu = () => {
    //     setIsMenuOpen(false);
    // };


    useEffect(() => {
        const hasVisited = sessionStorage.getItem('hasVisited');

        if (!hasVisited) {
            setShowModal(true);
            sessionStorage.setItem('hasVisited', 'true');
        }
    }, []);

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <>

            <nav id='navbar' className="navbar navbar-expand-lg py-3 animate__animated animate__fadeInDown">
                <div className="container">
                    <Link id='logo' className="navbar-brand" to="/"><img src='/Rockstar-logo.png' alt='Logo' /></Link>
                    <Link to='/' className='rockstarlogo animate__animated animate__flash'>GULSHAN ROCKSTAR</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" viewBox="0 0 30 30">
                            <path stroke="white" stroke-width="2" d="M4 7h22M4 15h22M4 23h22" />
                        </svg>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="gallery">Gallery</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="profile">Profile</Link>
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
                            <Link to='/login'><button class="btn btn-sm btn-outline-secondary rounded-pill" type="button">Login/Register</button></Link>
                        </span>
                    </div>
                   
                </div>
            </nav>


            {showModal && (
                <div className="alert animate__animated animate__fadeInDown">
                    <div className="alert_massage">
                        <h2>Welcome to My Site</h2>
                        <button onClick={closeModal} class="btn btn-outline-success" type="button">Get Started</button>
                    </div>
                </div>
            )}


        </>
    )
}

export default Navbar