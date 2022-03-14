import React from 'react';

export const Products = (props) => {

    return(
        <div className="row">
            <div id="product-list" className="col page-content">
                <div className="row ">
                    <div className="product-row d-flex justify-content-between">
                        <div className="col product-item"></div>
                        <div className="col product-item"></div>
                        <div className="col product-item"></div>
                    </div>
                </div>
                <div className="row">
                    <div className="product-row d-flex justify-content-between">
                        <div className="col product-item"></div>
                        <div className="col product-item"></div>
                        <div className="col product-item"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};