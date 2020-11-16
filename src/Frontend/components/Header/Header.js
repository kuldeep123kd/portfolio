import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';
const Header = () => {
  return (
    <>
      <header>
        <div className="header__start">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-4 col-sm-6 col-xs-6 align-self-center">
                <div className="header__logo">
                  <Link to="/" >Portfolio</Link>
                </div>
              </div>
              <div className="col-lg-8 col-md-8 col-sm-6 col-xs-6 align-self-center">
                <nav className="navbar__list">
                  <ul>
                    <li className="navbar__list__active">Home</li>
                    <li>About</li>
                    <li>Skills</li>
                    <li>Works</li>
                    <li>Resume</li>
                    <li>Certifications</li>
                  </ul>
                </nav>
              </div>

            </div>
          </div>
        </div>
        
      </header>
    </>
  );
}

export default Header;