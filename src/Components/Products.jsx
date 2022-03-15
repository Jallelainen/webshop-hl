import React from 'react';

export const Products = (props) => {

    return(
        <div className="row">
            <div id="product-list" className="col page-content">
                <div className="row product-row d-flex justify-content-center justify-content-xxl-between">
                    <div className="col-lg-4 mb-5 me-1 ms-1 me-lg-0 ms-lg-0 product-item"></div>
                    <div className="col-lg-4 mb-5 me-1 ms-1 me-lg-0 ms-lg-0 product-item"></div>
                    <div className="col-lg-4 mb-5 me-1 ms-1 me-lg-0 ms-lg-0 product-item"></div>
                </div>
                <div className="row product-row d-flex justify-content-center justify-content-xxl-between">
                    <div className="col-lg-4 mb-5 me-1 ms-1 me-lg-0 ms-lg-0 product-item"></div>
                    <div className="col-lg-4 mb-5 me-1 ms-1 me-lg-0 ms-lg-0 product-item"></div>
                    <div className="col-lg-4 mb-5 me-1 ms-1 me-lg-0 ms-lg-0 product-item"></div>
                </div>
            </div>
        </div>
    );
};