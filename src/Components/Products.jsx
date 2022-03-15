import React from 'react';

export const Products = (props) => {
    

    const ProductCards = (props) => {

        const Cards = props.products.map((product) => {
            return (
                
                <div className="card col-4 product-item" key={product.id}>
                    <img src={product.product_image.url} className="card-img-top" alt={product.name}/>
                    <div className="card-body">
                        <h5 className="card-title">{product.name}</h5>
                    </div>
                </div>
            
                
            )
        });

        return (
            <div id="product-list" className="col page-content">
                <div className="row product-row d-flex justify-content-center justify-content-xxl-between">
                    {Cards}
                </div>
            </div>
            );
    };

    return(
        <div className="row">
            <ProductCards products={props.products}/>
        </div>
    );
};