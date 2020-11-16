import React from 'react';
import Header from '../../components/Header/Header';
import Typewriter from 'typewriter-effect';
import userimg from '../../../assets/images/user-img.png'
import useraboutimg from '../../../assets/images/user-about.png'
import './HomePage.scss';
const HomePage = () => {
  return (
    <>
    <Header />
    <div className="section1">
      <div className="container">
        <div className="row">
          <div className="col-lg-7 col-md-7 col-sm-12 col-xs-12">
            <div className="section1__content">
              <h1>Hello I'm Kuldeep Shakya.</h1>
              <div className="section1__content__typewriter">
                <Typewriter
                  options={{
                    strings: ['A Front-end Web Developer', 'A React Js Developer'],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </div>
              <div>
                <button type="button" className="section1__downloadcvbtn" ><span>Download CV</span></button>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12">
            <div className="section1__usersvg">
              <img src={userimg} alt="userimg" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="section2">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12">
            <div className="section1__usersvg">
              <img src={useraboutimg} alt="userimg" />
            </div>
          </div>
          <div className="col-lg-7 col-md-7 col-sm-12 col-xs-12">
            <div className="section2__content">
              <h1>About Me</h1>
              <p></p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="section3">
      <div className="container">
        <div className="section3__myskills">
          <h2 className="text-center">My Skills</h2>
          <div className="section3__myskills__types">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                <div className="section3__myskills__content">
                  <h3>HTML</h3>
                  <div className="myskills__content__progress__rating" >
                    <div style={{width: "90%"}} className="myskills__content__progress__rating--filled"></div>
                  </div>
                </div>
                <div className="section3__myskills__content">
                  <h3>CSS</h3>
                  <div className="myskills__content__progress__rating" >
                    <div style={{width: "90%"}} className="myskills__content__progress__rating--filled"></div>
                  </div>
                </div>
                <div className="section3__myskills__content">
                  <h3>React Js</h3>
                  <div className="myskills__content__progress__rating" >
                    <div style={{width: "50%"}} className="myskills__content__progress__rating--filled"></div>
                  </div>
                </div>
                <div className="section3__myskills__content">
                  <h3>Firebase</h3>
                  <div className="myskills__content__progress__rating" >
                    <div style={{width: "40%"}} className="myskills__content__progress__rating--filled"></div>
                  </div>
                </div>
                <div className="section3__myskills__content">
                  <h3>React Native</h3>
                  <div className="myskills__content__progress__rating" >
                    <div style={{width: "20%"}} className="myskills__content__progress__rating--filled"></div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                <div className="section3__myskills__content">
                  <h3>Javascript</h3>
                  <div className="myskills__content__progress__rating" >
                    <div style={{width: "50%"}} className="myskills__content__progress__rating--filled"></div>
                  </div>
                </div>
                <div className="section3__myskills__content">
                  <h3>Bootstrap</h3>
                  <div className="myskills__content__progress__rating" >
                    <div style={{width: "80%"}} className="myskills__content__progress__rating--filled"></div>
                  </div>
                </div>
                <div className="section3__myskills__content">
                  <h3>Node Js</h3>
                  <div className="myskills__content__progress__rating" >
                    <div style={{width: "30%"}} className="myskills__content__progress__rating--filled"></div>
                  </div>
                </div>
                <div className="section3__myskills__content">
                  <h3>Rest API</h3>
                  <div className="myskills__content__progress__rating" >
                    <div style={{width: "50%"}} className="myskills__content__progress__rating--filled"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="section4">
      <div className="container">
        <div className="section4__work">
          <h1>Latest Work</h1>
          <div className="section4__work__list">
            <ul className="d-flex align-items-center">
              <li className="list__active">All</li>
              <li>Android</li>
              <li>Web</li>
              <li>Upcoming</li>
            </ul>
          </div>
          <div className="section4__work__list__content">
            <div className="row">
              <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">

              </div>
              <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">

              </div>
              <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default HomePage;