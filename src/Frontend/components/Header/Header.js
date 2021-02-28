import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';
const Header = () => {

  const [open, setOpen] = React.useState(false);

  const showMobMenu = () => {
    setOpen(!open);
    if(open) {
      document.getElementById("root").style.overflow = "hidden";
    }
  }

  // React.useEffect(() => {
  //   if(open) {
  //     document.getElementById("root").style.overflow = "hidden";
  //   }
  // }, [open])

  return (
    <>
      <header>
        <div className="header__start">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-6 col-6 align-self-center">
                <div className="header__logo">
                  <Link to="/" >Portfolio</Link>
                </div>
              </div>
              <div className="col-lg-8 col-md-6 col-sm-6 col-6 align-self-center">
                <nav className={`navbar__list ${open ? "navbar__list__translate" : ""}`}>
                  <div className='menubar__close' onClick={showMobMenu}>
                    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="121.31px" height="122.876px" viewBox="0 0 121.31 122.876" enableBackground="new 0 0 121.31 122.876" xmlSpace="preserve"><g><path fillRule="evenodd" clipRule="evenodd" d="M90.914,5.296c6.927-7.034,18.188-7.065,25.154-0.068 c6.961,6.995,6.991,18.369,0.068,25.397L85.743,61.452l30.425,30.855c6.866,6.978,6.773,18.28-0.208,25.247 c-6.983,6.964-18.21,6.946-25.074-0.031L60.669,86.881L30.395,117.58c-6.927,7.034-18.188,7.065-25.154,0.068 c-6.961-6.995-6.992-18.369-0.068-25.397l30.393-30.827L5.142,30.568c-6.867-6.978-6.773-18.28,0.208-25.247 c6.983-6.963,18.21-6.946,25.074,0.031l30.217,30.643L90.914,5.296L90.914,5.296z"/></g></svg>
                  </div>
                  <ul>
                    <li className="navbar__list__active" onClick={showMobMenu}><Link to="/">Home</Link></li>
                    <li onClick={showMobMenu}><a href="/#about">About</a></li>
                    <li onClick={showMobMenu}><a href="/#skills">Skills</a></li>
                    <li onClick={showMobMenu}><a href="/#works">Works</a></li>
                    <li onClick={showMobMenu}><a href="/#resume">Resume</a></li>
                    <li onClick={showMobMenu}><a href="/#certifications">Certifications</a></li>
                  </ul>
                </nav>
                <div className={`menubar-overlay ${open ? "show-overlay" : ""}`} onClick={showMobMenu}></div>
                <div className={`header__navbar__menu--btn ${open ? "open" : ""}`} onClick={showMobMenu}>
                  <div className="header__navbar__menu--btn__icon"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </header>
    </>
  );
}

export default Header;