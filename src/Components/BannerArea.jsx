import React from 'react';

export const BannerArea = (props) => {
    let likeSpider = '/../Pics/FightLikeSpider.jpg';
    let likeCheetah = '../Pics/RunLikeCheetah.jpg';

    return(
        <div className="row">
            <div className="col page-content">
                <div className="row d-flex justify-content-center">
                    <div id="likeSpider" className="col-sm-12 col-lg-6 p-0">
                        <img src={likeSpider} alt="Boxer in the ring"/>
                    </div>
                    <div id="likeCheetah" className="col-sm-12 col-lg-6 p-0">
                        <img src={likeCheetah} alt="Runner sprinting"/>
                    </div>
                </div>
            </div>
        </div>
    );
};