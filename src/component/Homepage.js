import React from 'react'

const Homepage = () => {
    return (
        <div>

            <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={1} aria-label="Slide 2" />
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={2} aria-label="Slide 3" />
                </div>
                <div className="carousel-inner slider_img">
                    <div className="carousel-item active" data-bs-interval={10000}>
                        <img src="/slider.jpg" className="d-block w-100" alt="..." />
                        <div className="carousel-caption slider_heading">
                            <h1>Hello, WELCOME TO MY PORTFOLIO</h1>

                        </div>
                    </div>
                    <div className="carousel-item" data-bs-interval={2000}>
                        <img src="/slider.jpg" className="d-block w-100" alt="..." />
                        <div className="carousel-caption slider_heading">
                            <h1>Hello, WELCOME TO MY PORTFOLIO</h1>

                        </div>
                    </div>
                    <div className="carousel-item" data-bs-interval={1000}>
                        <img src="/slider.jpg" className="d-block w-100" alt="..." />
                        <div className="carousel-caption slider_heading">
                            <h1>Hello, WELCOME TO MY PORTFOLIO</h1>

                        </div>
                    </div>
                </div>
                {/* <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="visually-hidden">Next</span>
                </button> */}
            </div>


        </div>
    )
}

export default Homepage