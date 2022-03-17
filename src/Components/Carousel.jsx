import React from 'react';


export const Carousel = (props) => {
    let carousel1 = '../Pics/nike-lebron-13-25k-1.jpg';
    let carousel2 = '../Pics/13-100_Nike_Allstar_Bball_Planet_Group-01_hd_1600.jpg';
    let carousel3 = '../Pics/fa4596ad9a9d39901eeb455ed4f74e44.jpg';


    return(
    <div className="row">
        <div id="carouselSlides" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators mb-5">
                <button type="button" data-bs-target="#carouselSlides" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselSlides" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselSlides" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div id="carousel-item" className="carousel-item active ">
                    <img src={carousel1} className="d-block w-100" alt="Lebron shoes"/>
                    <div id="carousel-buttons" className="carousel-caption pb-5 mb-5 me-5">
                        <a href="http://localhost:3000">
                            <button className="btn btn-light btn-lg ps-1 pe-1 ps-md-3 pe-md-3 ps-lg-5 pe-lg-5 me-3" >BUY NOW</button>
                        </a>
                        <a href="http://localhost:3000">
                            <button className="btn btn-outline-light btn-lg ps-1 pe-1 ps-md-3 pe-md-3 ps-lg-5 pe-lg-5">LEARN MORE</button>
                        </a>
                    </div>
                </div>
                <div id="carousel-item" className="carousel-item">
                    <img src={carousel2} className="d-block w-100" alt="Nike shoes"/>
                </div>
                <div id="carousel-item" className="carousel-item">
                    <img src={carousel3} className="d-block w-100" alt="Nike shoes"/>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselSlides" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselSlides" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    </div>
)
} 