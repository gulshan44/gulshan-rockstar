import React, { useState } from 'react'

const ChoosePic = () => {

    const [selectedImage, setSelectedImage] = useState(null);

    const images = [
        "/img1.jpg",
        "/img1.jpg",
        "/img1.jpg",
        "/img1.jpg",
        "/img1.jpg",
        "/img1.jpg",
    ];

    return (
        <>
            <div className='container py-5 text-center categories'>

                <h2>CHOOSE FROM CATEGORIES</h2>
                <p>"Unlock a gallery of moments frozen in time. Our categories bring together the best of creativity, beauty, and imagination to help you find exactly what resonates with your heart."</p>

                <div className='row pt-5 box'>

                    {images.map((image, index) => (
                        <div className='col-6 col-md-4 categories_box'>
                            <img src='/img1.jpg' alt='...' />
                        </div>
                    ))}

                </div>
            </div>

            {selectedImage && (
                <div className="modal fade show"
                    style={{ display: "block", backgroundColor: "rgba(0, 0, 0, 0.8)" }}
                    tabIndex="-1"
                >
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-body">
                                <img src={selectedImage} alt="Selected" className="img-fluid" />
                            </div>
                            <button type="button" className="btn-close"
                                style={{ position: "absolute", top: "10px", right: "10px", background: "white", borderRadius: "50%",}}
                                onClick={() => setSelectedImage(null)}></button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default ChoosePic