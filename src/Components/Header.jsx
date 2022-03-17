import React from 'react';

export const Header = (props) => {

    return (
       <div className="row">
           <nav id="navbar" className="navbar fixed-top navbar-expand-lg navbar-dark header-nav m-1 m-lg-4">
                <div id="navbar-text-container" className="container-fluid text-light">
                    <a id="nav-a-1" className="navbar-brand h1" href="http://localhost:3000">SPORTSHOES.COM</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse d-flex flex-row-reverse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a id="nav-a-2" className="nav-link active" aria-current="page" href="http://localhost:3000">MEN</a>
                            <a id="nav-a-3" className="nav-link" href="http://localhost:3000">WOMEN</a>
                        </div>
                    </div>
                </div>
            </nav>
       </div>
    )
}