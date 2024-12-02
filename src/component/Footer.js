import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div>
            <footer class="py-5">

                <div class="container">

                    <div class="pb-3 socialicons">

                        <h2 class="pb-3 text-white w-50 fs-4">Follow Us</h2>

                        <div class="socialmedia">

                            <Link class="fs-5 text-white pe-3" to="https://www.facebook.com/" target="_blank"><i
                                class="bi bi-facebook"></i></Link>
                            <Link class="fs-5 text-white pe-3" to="https://www.instagram.com/" target="_blank"><i
                                class="bi bi-instagram"></i></Link>
                            <Link class="fs-5 text-white pe-3" to="https://www.twitter.com/" target="_blank"><i
                                class="bi bi-twitter"></i></Link>
                            <Link class="fs-5 text-white" to="https://www.youtube.com/" target="_blank"><i
                                class="bi bi-youtube"></i></Link>

                        </div>

                    </div>

                    <div class="row pt-4">

                        <div class="col-md-3 footer-box">

                            <Link to=""><img src="/Rockstar-logo.png" alt="" class="img-fluid logo" /></Link>

                            <p class="pt-4">I recently had the pleasure of working with a talented photographer for
                                my daughter's senior portraits, and I couldn't be happier with the results. From the moment we
                                met.</p>

                        </div>

                        <div class="col-md-3 footer-box">

                            <h2 class="pb-3 text-white w-50 fs-4">Quicklinks</h2>
                            <ul class="pt-2 list-unstyled">
                                <li class="mb-2"><Link to="">Home</Link></li>
                                <li class="mb-2"><Link to="">About</Link></li>
                                <li class="mb-2"><Link to="">Portfolio</Link></li>
                                <li class="mb-2"><Link to="">Blog</Link></li>
                                <li class="mb-2"><Link to="">Contact</Link></li>
                            </ul>
                        </div>

                        <div class="col-md-3 footer-box">

                            <h2 class="pb-3 text-white w-50 fs-4">Other Info</h2>
                            <ul class="pt-2 list-unstyled">
                                <li class="mb-2"><Link to="">Privacy Policy</Link></li>
                                <li class="mb-2"><Link to="">Terms & Conditions</Link></li>
                                <li class="mb-2"><Link to="">Credit Disclaimer</Link></li>
                                <li class="mb-2"><Link to="">Contact Us</Link></li>
                            </ul>

                        </div>

                        <div class="col-md-3 footer-box">

                            <p class="text-white pt-3">2024 Photohous. All rights reserved.</p>

                        </div>

                    </div>

                </div>

            </footer>
        </div>
    )
};

export default Footer