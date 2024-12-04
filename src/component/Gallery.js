import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Gallery = () => {

    const [selectedImage, setSelectedImage] = useState(null);

    const images = [
        "/img1.jpg",
        "/img2.jpg",
        "/img3.jpg",
        "/img4.png",
        "/img5.jpg",
        // "/img6.jpg",
        // "/img7.jpg",
        // "/img8.jpg",
        // "/img9.jpg",
        // "/img10.jpg",
        // "/img11.jpg",
        "/img12.jpg",
        "/img13.jpg",
        "/img14.jpg",
    ];

    return (
        <>
            <div className='container py-4'>
                <h1 className='text-white'><Link to='/'><i class="bi bi-arrow-left"></i></Link> All Photos</h1>
                {/* <p className='text-white'>This is Gallery page</p> */}
                <div className='row'>

                    {images.map((image, index) => (

                        <div key={index} className='col-md-2 col-3 p-0 gallery_img'>
                            <img src={image} alt={`${index + 1}`} onClick={() => setSelectedImage(image)} className='img-fluid' />
                        </div>
                    ))}

                </div>
            </div>

            {selectedImage && (
                <div className="modal fade show"
                    style={{ display: "block", backgroundColor: "rgba(0, 0, 0, 0.8)", position: "fixed", top: 0, left: 0, width: "100%", height: "100%", }}
                    tabIndex="-1" >

                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content animate__animated animate__zoomIn">

                            <div className="click_img">
                                <img src={selectedImage} alt="Selected" className="img-fluid" />
                            </div>

                            <button type="button" className="btn-close"
                                style={{ position: "absolute", top: "15px", right: "15px", color: "white", }} onClick={() => setSelectedImage(null)} ></button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default Gallery