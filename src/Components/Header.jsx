import React from 'react';

export const Header = () => {
    return (
       <div className="row">
           <nav id="navbar" className="navbar fixed-top navbar-expand-lg navbar-light header-nav">
                <div className="container-fluid">
                    <a className="navbar-brand text-light h1" href="http://localhost:3000">SPORTSHOES.COM</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse d-flex flex-row-reverse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a className="nav-link active text-light" aria-current="page" href="http://localhost:3000">MEN</a>
                            <a className="nav-link text-light" href="http://localhost:3000">WOMEN</a>
                        </div>
                    </div>
                </div>
            </nav>
       </div>
    )
}