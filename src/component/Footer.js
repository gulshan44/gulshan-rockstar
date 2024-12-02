import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div>
            <footer className="py-5 animate__animated animate__flash">

                <div className="container">

                    <div className="pb-3 socialicons">

                        <h2 className="pb-3 text-white w-50 fs-4">Follow Us</h2>

                        <div className="socialmedia">

                            <Link className="fs-5 text-white pe-3" to="https://www.facebook.com/" target="_blank"><i
                                className="bi bi-facebook"></i></Link>
                            <Link className="fs-5 text-white pe-3" to="https://www.instagram.com/" target="_blank"><i
                                className="bi bi-instagram"></i></Link>
                            <Link className="fs-5 text-white pe-3" to="https://www.twitter.com/" target="_blank"><i
                                className="bi bi-twitter"></i></Link>
                            <Link className="fs-5 text-white" to="https://www.youtube.com/" target="_blank"><i
                                className="bi bi-youtube"></i></Link>

                        </div>

                    </div>

                    <div className="row pt-4">

                        <div className="col-md-3 footer-box">

                            <Link to=""><img src="/Rockstar-logo.png" alt="..." className="img-fluid logo" /></Link>

                            <p className="pt-4">I recently had the pleasure of working with a talented photographer for
                                my daughter's senior portraits, and I couldn't be happier with the results. From the moment we
                                met.</p>

                        </div>

                        <div className="col-md-3 footer-box">

                            <h2 className="pb-3 text-white w-50 fs-4">Quicklinks</h2>
                            <ul className="pt-2 list-unstyled">
                                <li className="mb-2"><Link to="">Home</Link></li>
                                <li className="mb-2"><Link to="">About</Link></li>
                                <li className="mb-2"><Link to="">Portfolio</Link></li>
                                <li className="mb-2"><Link to="">Blog</Link></li>
                                <li className="mb-2"><Link to="">Contact</Link></li>
                            </ul>
                        </div>

                        <div className="col-md-3 footer-box">

                            <h2 className="pb-3 text-white w-50 fs-4">Other Info</h2>
                            <ul className="pt-2 list-unstyled">
                                <li className="mb-2"><Link to="">Privacy Policy</Link></li>
                                <li className="mb-2"><Link to="">Terms & Conditions</Link></li>
                                <li className="mb-2"><Link to="">Credit Disclaimer</Link></li>
                                <li className="mb-2"><Link to="">Contact Us</Link></li>
                            </ul>

                        </div>

                        <div className="col-md-3 footer-box">

                            <p className="text-white pt-3">2024 Photohous. All rights reserved.</p>

                        </div>

                    </div>

                </div>

            </footer>
        </div>
    )
};

export default Footer