import React from 'react';

export const Header = () => {
    return (
       <div className="row">
           <nav class="navbar navbar-expand-lg navbar-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="http://localhost:3000">SPORTSHOES.COM</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse d-flex flex-row-reverse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <a class="nav-link active" aria-current="page" href="http://localhost:3000">MEN</a>
                            <a class="nav-link" href="http://localhost:3000">WOMEN</a>
                        </div>
                    </div>
                </div>
            </nav>
       </div>
    )
}