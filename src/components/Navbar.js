import React from 'react'

const Navbar = ({ filterItem, cockList }) => {
    return (
     
            <div className="header">
                <i className="material-icons icon">liquor</i>
                <h1 className="text">My bar</h1>
                <nav className="navbar mx-auto">
                    <div className="btn-group mx-auto">
                {cockList.map((newCock) => {
                    return (
                    <button className="btn-group__item" onClick={() => filterItem(newCock)}>{newCock}</button>
                );
                })};
                  </div>
                </nav>
              
                </div>   
            );
};

            export default Navbar;
