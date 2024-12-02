import React, { useState } from 'react'

const Gallery = () => {

    const [selectedImage, setSelectedImage] = useState(null);

    const images = [
        "/img1.jpg",
        "/img2.jpg",
        "/img3.jpg",
        "/img1.jpg",
        "/img1.jpg",
        "/img1.jpg",
        "/img1.jpg",
        "/img2.jpg",
        "/img3.jpg",
        "/img1.jpg",
        "/img1.jpg",
        "/img1.jpg",

    ];

    return (
        <>
            <div className='container py-4 animate__animated animate__slideInUp'>
                <h1 className='text-white'>All Photos</h1>
                {/* <p className='text-white'>This is Gallery page</p> */}
                <div className='row'>

                    {images.map((image, index) => (

                        <div key={index} className='col-md-2 col-3 p-0 gallery_img animate__animated animate__slideInUp'>
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
                                style={{ position: "absolute", top: "15px", right: "15px", color: "black", }} onClick={() => setSelectedImage(null)} ></button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default Gallery