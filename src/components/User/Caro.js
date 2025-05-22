import React from 'react'
import './Caro.css'
import imgs from './london bridge.jpg';
import imgs1 from './london-food-tours-and-tastings.jpg';
import imgs2 from './istockphoto-1184659418-612x612.jpg';

function Caro() {
    return (
    <div className='caro-main'>
            <div className='row'>
                <div className='col-md-4'>
                    <h1>Explore our latest posts</h1><br/>
                    <p>Stay up to date with trending topics, fresh perspectives,<br/> and voices from around the globe.</p>
                    <p>Start with our latest posts, check out the popular reads, or browse by category to find something that speaks to you.</p>
                </div>
            <div className='col-md-8'>
            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel" data-bs-interval="300">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={imgs} class="d-block w-100" alt="..." height={500} />
                        <div class="carousel-caption d-none d-md-block">
                            <h3>Walk in the footsteps of history</h3>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src={imgs1} class="d-block w-100" alt="..."  height={500} />
                        <div class="carousel-caption d-none d-md-block">
                            <h3>Discover new cuisines...</h3>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src={imgs2} class="d-block w-100" alt="..."  height={500} />
                        <div class="carousel-caption d-none d-md-block">
                            <h3>From bold reds to crisp whites</h3>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Caro