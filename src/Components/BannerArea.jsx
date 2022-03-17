import React from 'react';

export const BannerArea = (props) => {

    return(
        <div className="row">
            <div className="col mb-5 mt-5 page-content">
                <div className="row d-flex justify-content-center">
                    <a id="likeSpider" className="d-flex align-items-end" href="http://localhost:3000">
                        <div  className="col p-3">
                            <h3 className="ps-4">FIGHT LIKE A SPIDER</h3>
                            <p className="text-secondary">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                            <p className="banner-anchor">READ MORE</p>
                        </div>
                    </a>
                    <a id="likeCheetah" className="d-flex align-items-end" href="http://localhost:3000">
                        <div className="col p-3">
                            <h3 className="ps-4">RUN LIKE A CHEETAH</h3>
                            <p className="text-secondary">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                            <p className="banner-anchor">READ MORE</p>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
};