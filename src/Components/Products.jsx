import React from 'react';

export const Products = (props) => {

    return(
        <div className="row">
            <div id="product-list" className="col page-content">
                <div className="row product-row d-flex justify-content-center justify-content-xxl-between mb-5">
                    <div className="col-lg-4 me-1 ms-1 m-lg-0 product-item"></div>
                    <div className="col-lg-4 me-1 ms-1 m-lg-0 product-item"></div>
                    <div className="col-lg-4 me-1 ms-1 m-lg-0 product-item"></div>
                </div>
                <div className="row product-row d-flex justify-content-center justify-content-xxl-between mb-5">
                    <div className="col-lg-4 me-1 ms-1 m-lg-0 product-item"></div>
                    <div className="col-lg-4 me-1 ms-1 m-lg-0 product-item"></div>
                    <div className="col-lg-4 me-1 ms-1 m-lg-0 product-item"></div>
                </div>
            </div>
        </div>
    );
};