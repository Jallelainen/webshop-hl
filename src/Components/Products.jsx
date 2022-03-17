import React from 'react';

export const Products = (props) => {
    

    const ProductCards = (props) => {

        const Cards = props.products.map((product) => {
            return (
                <div className="col p-0 d-flex justify-content-center" key={product.id}>
                    <div className="card mb-5 product-item">
                        <img src={product.product_image.url} className="card-img-top" alt={product.name}/>
                        <div className="card-body d-flex align-items-end">
                            <h5 className="card-title">{product.name}</h5>
                        </div>
                    </div>
                </div>
                
            )
        });

        return (
            <div id="product-grid" className="col page-content">
                <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 product-row">
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