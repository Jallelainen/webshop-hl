import React from 'react';

export const SearchBar = (props) => {

    //input field uses onChange to trigger the handleChange function.
    return(
        <div className="row">
            <div id="searchbar" className="col page-content">
                <div className="input-group mb-1 ms-4 ms-xl-0">
                    <input onChange={(e) => props.handleChange(e.target.value)} type="text" id="text-field-search" className="form-control" placeholder="Search product..." aria-label="Recipient's username" aria-describedby="button-addon-search"/>
                    <button className="btn btn-outline-secondary me-5 me-xl-0" type="button" id="button-addon-search">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};