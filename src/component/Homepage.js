import React from 'react'
import { Link } from 'react-router-dom'

const Homepage = () => {

    return (
        <div>

            <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="/slider1.jpg" className="d-block w-100" alt="..." />

                        <div className='heading'>
                            <p>Hello,</p>
                            <h1>Welcome To <span>Rockstar's Gallery</span></h1>
                            <p>We are glad to have you here. Explore the amazing collection of images.</p>
                            <Link to='/' className='btn btn-outline-info'>View Gallery</Link>
                        </div>

                    </div>
                
                </div>
            </div>

        </div>
    )
}

export default Homepage