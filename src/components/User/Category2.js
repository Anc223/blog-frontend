import React from 'react'
import './Category2.css'
import pic1 from './plce1.jpg'
import pic2 from './plce2.avif'
import pic3 from './plce3.jpg'

function Category2() {
    return (
        <div className='catg2-bg'>
            <div className='row'>
                <div className='col-md-5'>
                    <div className='catg-main'>
                        <h1>FEATURED</h1>
                        <p className="featured-desc">Picking the perfect place to travel.</p>
                        <h3>
                            Let’s hit the road and discover the beauty of every journey – one destination at a time.
                        </h3>
                    </div>
                </div>
                <div className='col-md-7'>
                    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel" data-bs-interval="300">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src={pic1} className="d-block w-100" alt="..." height={500} />
                                <div className="carousel-caption d-none d-md-block">
                                    <h3>Walk in the footsteps of history</h3>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src={pic2} className="d-block w-100" alt="..." height={500} />
                                <div className="carousel-caption d-none d-md-block">
                                    <h3>Discover new cuisines...</h3>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src={pic3} className="d-block w-100" alt="..." height={500} />
                                <div className="carousel-caption d-none d-md-block">
                                    <h3>From bold reds to crisp whites</h3>
                                </div>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
    
}

export default Category2