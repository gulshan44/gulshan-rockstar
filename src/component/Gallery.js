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
        <div className='container-sm'>
            <h1>Gallery Page</h1>
            <p>This is Gallery page</p>
            <div className='row'>

                {images.map((image, index) => (

                    <div key={index} className='col-md-2 col-3 p-0 gallery_img'>
                        <img src={image} alt={`${index + 1}`} onClick={() => setSelectedImage(image)} className='img-fluid'/>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default Gallery