import React, { useState } from 'react'

const ChoosePic = () => {

    const [selectedImage, setSelectedImage] = useState(null);

    const images = [
        "/img1.jpg",
        "/img2.jpg",
        "/img3.jpg",
        "/img1.jpg",
        "/img1.jpg",
        "/img1.jpg",
    ];

    return (
        <>
            <div className='container pt-5 text-center categories'>

                <h2>CHOOSE FROM CATEGORIES</h2>
                <p>"Unlock a gallery of moments frozen in time. Our categories bring together the best of creativity, beauty, and imagination to help you find exactly what resonates with your heart."</p>

                <div className='row pt-5 box'>

                    {images.map((image, index) => (
                        <div key={index} className='col-6 col-md-4 categories_box'>
                            <img src={image} alt={`${index + 1}`} onClick={() => setSelectedImage(image)} />
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

export default ChoosePic