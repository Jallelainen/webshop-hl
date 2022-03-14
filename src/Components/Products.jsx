import React from 'react';

export const Products = (props) => {

    return(
        <div className="row">
            <div id="product-list" className="col page-content">
                <div className="row product-row d-flex justify-content-center justify-content-xxl-between">
                    <div className="col-xl-4 product-item"></div>
                    <div className="col-xl-4 product-item"></div>
                    <div className="col-xl-4 product-item"></div>
                </div>
                <div className="row product-row d-flex justify-content-center justify-content-xxl-between">
                    <div className="col-xl-4 product-item"></div>
                    <div className="col-xl-4 product-item"></div>
                    <div className="col-xl-4 product-item"></div>
                </div>
            </div>
        </div>
    );
};