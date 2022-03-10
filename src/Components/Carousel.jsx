import React from 'react';


export const Carousel = (props) => {
    let carousel1 = '../Pics/nike-lebron-13-25k-1.jpg';
    let carousel2 = '../Pics/13-100_Nike_Allstar_Bball_Planet_Group-01_hd_1600.jpg';
    let carousel3 = '../Pics/fa4596ad9a9d39901eeb455ed4f74e44.jpg';

    return(
    <div className="row">
        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src={carousel1} class="d-block w-100" alt="Lebron shoes"/>
                </div>
                <div class="carousel-item">
                    <img src={carousel2} class="d-block w-100" alt="Nike shoes"/>
                </div>
                <div class="carousel-item">
                    <img src={carousel3} class="d-block w-100" alt="Nike shoes"/>
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
)
} 