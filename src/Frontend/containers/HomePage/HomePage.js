import React from 'react';
import Header from '../../components/Header/Header';
import Typewriter from 'typewriter-effect';
import userimg from '../../../assets/images/user-img.webp'
import useraboutimg from '../../../assets/images/user-about.svg'
import './HomePage.scss';
import ImageGrid from './WorkSamples';
import Certifications from './Certifications';
import Footer from '../../components/Header/Footer';
const HomePage = () => {

  const[activeTab, setActiveTab] = React.useState('All');

  const activeTabs = (text) => {
    setActiveTab(text);
  }
  return (
    <>
    <Header />
    <div className="section1" id="home">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7 col-md-7 col-sm-12 col-12" data-aos="fade-up" data-aos-delay="200" data-aos-once="true">
            <div className="section1__content">
              <h1>Hello I'm Kuldeep Shakya.</h1>
              <div className="section1__content__typewriter">
                <Typewriter
                  options={{
                    strings: ['A Frontend Web Developer', 'A React Js Developer'],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </div>
              <div>
                <div className="social__links">
                  <a href="https://github.com/kuldeep123kd" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1.03em" height="1em" style={{msTransformransform: "rotate(360deg)", WebkitTransformrm: "rotate(360deg)", transform: "rotate(360deg)"}} preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 250"><path d="M128.001 0C57.317 0 0 57.307 0 128.001c0 56.554 36.676 104.535 87.535 121.46c6.397 1.185 8.746-2.777 8.746-6.158c0-3.052-.12-13.135-.174-23.83c-35.61 7.742-43.124-15.103-43.124-15.103c-5.823-14.795-14.213-18.73-14.213-18.73c-11.613-7.944.876-7.78.876-7.78c12.853.902 19.621 13.19 19.621 13.19c11.417 19.568 29.945 13.911 37.249 10.64c1.149-8.272 4.466-13.92 8.127-17.116c-28.431-3.236-58.318-14.212-58.318-63.258c0-13.975 5-25.394 13.188-34.358c-1.329-3.224-5.71-16.242 1.24-33.874c0 0 10.749-3.44 35.21 13.121c10.21-2.836 21.16-4.258 32.038-4.307c10.878.049 21.837 1.47 32.066 4.307c24.431-16.56 35.165-13.12 35.165-13.12c6.967 17.63 2.584 30.65 1.255 33.873c8.207 8.964 13.173 20.383 13.173 34.358c0 49.163-29.944 59.988-58.447 63.157c4.591 3.972 8.682 11.762 8.682 23.704c0 17.126-.148 30.91-.148 35.126c0 3.407 2.304 7.398 8.792 6.14C219.37 232.5 256 184.537 256 128.002C256 57.307 198.691 0 128.001 0zm-80.06 182.34c-.282.636-1.283.827-2.194.39c-.929-.417-1.45-1.284-1.15-1.922c.276-.655 1.279-.838 2.205-.399c.93.418 1.46 1.293 1.139 1.931zm6.296 5.618c-.61.566-1.804.303-2.614-.591c-.837-.892-.994-2.086-.375-2.66c.63-.566 1.787-.301 2.626.591c.838.903 1 2.088.363 2.66zm4.32 7.188c-.785.545-2.067.034-2.86-1.104c-.784-1.138-.784-2.503.017-3.05c.795-.547 2.058-.055 2.861 1.075c.782 1.157.782 2.522-.019 3.08zm7.304 8.325c-.701.774-2.196.566-3.29-.49c-1.119-1.032-1.43-2.496-.726-3.27c.71-.776 2.213-.558 3.315.49c1.11 1.03 1.45 2.505.701 3.27zm9.442 2.81c-.31 1.003-1.75 1.459-3.199 1.033c-1.448-.439-2.395-1.613-2.103-2.626c.301-1.01 1.747-1.484 3.207-1.028c1.446.436 2.396 1.602 2.095 2.622zm10.744 1.193c.036 1.055-1.193 1.93-2.715 1.95c-1.53.034-2.769-.82-2.786-1.86c0-1.065 1.202-1.932 2.733-1.958c1.522-.03 2.768.818 2.768 1.868zm10.555-.405c.182 1.03-.875 2.088-2.387 2.37c-1.485.271-2.861-.365-3.05-1.386c-.184-1.056.893-2.114 2.376-2.387c1.514-.263 2.868.356 3.061 1.403z" fill="#161614"/></svg>
                  </a>
                  <a href="https://www.linkedin.com/in/kuldeepkd/" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="2500" height="2389" viewBox="0 5 1036 990"><path d="M0 120c0-33.334 11.667-60.834 35-82.5C58.333 15.833 88.667 5 126 5c36.667 0 66.333 10.666 89 32 23.333 22 35 50.666 35 86 0 32-11.333 58.666-34 80-23.333 22-54 33-92 33h-1c-36.667 0-66.333-11-89-33S0 153.333 0 120zm13 875V327h222v668H13zm345 0h222V622c0-23.334 2.667-41.334 8-54 9.333-22.667 23.5-41.834 42.5-57.5 19-15.667 42.833-23.5 71.5-23.5 74.667 0 112 50.333 112 151v357h222V612c0-98.667-23.333-173.5-70-224.5S857.667 311 781 311c-86 0-153 37-201 111v2h-1l1-2v-95H358c1.333 21.333 2 87.666 2 199 0 111.333-.667 267.666-2 469z"/></svg>
                  </a>
                </div>
                <a href="https://drive.google.com/uc?export=download&id=1074Oc_QMQ4ICkEdC1K9620Oqh7yAmbMe" download className="section1__downloadcvbtn" ><span>Download CV</span></a>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-5 col-sm-12 col-12" data-aos="fade-up" data-aos-delay="200" data-aos-once="true">
            <div className="section1__usersvg">
              <img src={userimg} alt="userimg" />
              <a style={{display: 'none'}} href='https://www.freepik.com/vectors/technology'>Technology vector created by freepik - www.freepik.com</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="section2" id="about" >
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-md-5 col-sm-12 col-12" data-aos="fade-up" data-aos-delay="200" data-aos-once="true">
            <div className="section2__usersvg">
              <img src={useraboutimg} alt="userimg" />
              <a style={{display: 'none'}} href="https://storyset.com/coronavirus">Illustration by Freepik Storyset</a>
            </div>
          </div>
          <div className="col-lg-7 col-md-7 col-sm-12 col-12" data-aos="fade-up" data-aos-delay="200" data-aos-once="true">
            <div className="section2__content">
              <h1>About Me</h1>
              <p>Frontend Web Developer at DigiCollect. Freelance React Js Developer, Redhat global certified in RHCE. Love creating responsive UI components.</p>
              <div className="row no-gutters">
                <div className="col-lg-6">
                  <h2>Name:&nbsp;<span>Kuldeep Shakya</span></h2>
                  <h2>Phone:&nbsp;<span>+91-9458456509</span></h2>
                  <h2>Zip code:&nbsp;<span>205001</span></h2>
                </div>
                <div className="col-lg-6">
                  <h2>Email:&nbsp;<span><a href="mailto:kuldeep.shakya.kd@gmail.com" >kuldeep.shakya.kd@gmail.com</a></span></h2>
                  <h2>City:&nbsp;<span>Mainpuri, Uttar Pradesh, India</span></h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="section3" id="skills">
      <div className="container">
        <div className="section3__myskills">
          <h2 className="text-center">My Skills</h2>
          <div className="section3__myskills__types">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                <div className="section3__myskills__content" data-aos="fade-up" data-aos-delay="200" data-aos-once="true">
                  <h3>HTML</h3>
                  <div className="myskills__content__progress__rating" >
                    <div style={{width: "90%"}} className="myskills__content__progress__rating--filled"></div>
                  </div>
                </div>
                <div className="section3__myskills__content" data-aos="fade-up" data-aos-delay="200" data-aos-once="true">
                  <h3>CSS</h3>
                  <div className="myskills__content__progress__rating" >
                    <div style={{width: "90%"}} className="myskills__content__progress__rating--filled"></div>
                  </div>
                </div>
                <div className="section3__myskills__content" data-aos="fade-up" data-aos-delay="200" data-aos-once="true">
                  <h3>React Js</h3>
                  <div className="myskills__content__progress__rating" >
                    <div style={{width: "60%"}} className="myskills__content__progress__rating--filled"></div>
                  </div>
                </div>
                <div className="section3__myskills__content" data-aos="fade-up" data-aos-delay="200" data-aos-once="true">
                  <h3>Vue Js</h3>
                  <div className="myskills__content__progress__rating" >
                    <div style={{width: "60%"}} className="myskills__content__progress__rating--filled"></div>
                  </div>
                </div>
                <div className="section3__myskills__content" data-aos="fade-up" data-aos-delay="200" data-aos-once="true">
                  <h3>React Native</h3>
                  <div className="myskills__content__progress__rating" >
                    <div style={{width: "20%"}} className="myskills__content__progress__rating--filled"></div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                <div className="section3__myskills__content" data-aos="fade-up" data-aos-delay="200" data-aos-once="true">
                  <h3>Javascript</h3>
                  <div className="myskills__content__progress__rating" >
                    <div style={{width: "60%"}} className="myskills__content__progress__rating--filled"></div>
                  </div>
                </div>
                <div className="section3__myskills__content" data-aos="fade-up" data-aos-delay="200" data-aos-once="true">
                  <h3>Bootstrap</h3>
                  <div className="myskills__content__progress__rating" >
                    <div style={{width: "80%"}} className="myskills__content__progress__rating--filled"></div>
                  </div>
                </div>
                {/* <div className="section3__myskills__content" data-aos="fade-up" data-aos-delay="200" data-aos-once="true">
                  <h3>Angular</h3>
                  <div className="myskills__content__progress__rating" >
                    <div style={{width: "20%"}} className="myskills__content__progress__rating--filled"></div>
                  </div>
                </div> */}
                <div className="section3__myskills__content" data-aos="fade-up" data-aos-delay="200" data-aos-once="true">
                  <h3>Node Js</h3>
                  <div className="myskills__content__progress__rating" >
                    <div style={{width: "30%"}} className="myskills__content__progress__rating--filled"></div>
                  </div>
                </div>
                <div className="section3__myskills__content" data-aos="fade-up" data-aos-delay="200" data-aos-once="true">
                  <h3>Rest API</h3>
                  <div className="myskills__content__progress__rating" >
                    <div style={{width: "50%"}} className="myskills__content__progress__rating--filled"></div>
                  </div>
                </div>
                <div className="section3__myskills__content" data-aos="fade-up" data-aos-delay="200" data-aos-once="true">
                  <h3>Firebase</h3>
                  <div className="myskills__content__progress__rating" >
                    <div style={{width: "40%"}} className="myskills__content__progress__rating--filled"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="section4" id="works">
      <div className="container">
        <div className="section4__work">
          <h1>Latest Work</h1>
          <div className="section4__work__list">
            <ul>
              <li onClick={() => activeTabs('All')} className={`${activeTab === 'All' ? 'list__active' : ''} `}>All</li>
              <li onClick={() => activeTabs('Android')} className={`${activeTab  === 'Android' ? 'list__active' : ''} `}>Android</li>
              <li onClick={() => activeTabs('Web')} className={`${activeTab  === 'Web' ? 'list__active' : ''} `}>Web</li>
              <li onClick={() => activeTabs('Upcoming')} className={`${activeTab  === 'Upcoming' ? 'list__active' : ''} `}>Upcoming</li>
            </ul>
          </div>
          <div className="section4__work__list__content">
            <ImageGrid activeTab={activeTab} />
          </div>
        </div>
      </div>
    </div>
    <div className="section5" id="resume">
      <div className="container">
        <div className="section5__resume">
          <h1>Resume</h1>
          <div className="row">
            <div className="col-lg-6">
              <h2>Work Experience</h2>
              <div className="section5__resume__work" data-aos="fade-up" data-aos-delay="200" data-aos-once="true">
                <div className="section5__resume__work__dotline">
                  <div className="section5__resume__work__dot">
                  </div>
                  <div className="section5__resume__work__line">
                  </div>
                </div>
                <div className="section5__resume__work__text">
                  <div className="section5__resume__work__text__title">
                    <h3>Frontend Web Developer</h3>
                    <span>
                      Feb 2021 - Present
                    </span>
                  </div>
                  <p>DigiCollect, Bangalore</p>
                  <ul>
                    <li>
                      Creating responsive components for POS, Helpdesk, CRM. Using technologies HTML, CSS, JavaScript, Bootstrap and JavaScript framework Vue Js. API Integration using Axios and Vuex for state management. Using ES6 JavaScript features Async, Await, Arrow functions and Promises.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="section5__resume__work" data-aos="fade-up" data-aos-delay="200" data-aos-once="true">
                <div className="section5__resume__work__dotline">
                  <div className="section5__resume__work__dot">
                  </div>
                  <div className="section5__resume__work__line">
                  </div>
                </div>
                <div className="section5__resume__work__text">
                  <div className="section5__resume__work__text__title">
                    <h3>Frontend Web Developer</h3>
                    <span>
                      Jan 2021 - Present
                    </span>
                  </div>
                  <span>Freelance</span>
                  <p>Banao Tech, Bangalore</p>
                  <ul>
                    <li>
                      Worked on a project name <a href="https://happimynd.com/" target="_blank" rel="noopener noreferrer" >happimynd.com</a> as a Frontend developer. Developed responsive web pages.</li>
                  </ul>
                </div>
              </div>
              <div className="section5__resume__work" data-aos="fade-up" data-aos-delay="200" data-aos-once="true">
                <div className="section5__resume__work__dotline">
                  <div className="section5__resume__work__dot">
                  </div>
                  <div className="section5__resume__work__line">
                  </div>
                </div>
                <div className="section5__resume__work__text">
                  <div className="section5__resume__work__text__title">
                    <h3>React Js Developer</h3>
                    <span>
                      July 2020 - Dec 2020
                    </span>
                  </div>
                  <span>Freelance</span>
                  <p>Banao Tech, Bangalore</p>
                  <ul>
                    <li>
                      Worked on a project name publicchoice. Developed responsive UI components and used third party libraries like Material UI. Worked on API integration part and state management using context api and components-based state management.</li>
                  </ul>
                </div>
              </div>
              <div className="section5__resume__work" data-aos="fade-up" data-aos-delay="200" data-aos-once="true">
                <div className="section5__resume__work__dotline">
                  <div className="section5__resume__work__dot">
                  </div>
                  <div className="section5__resume__work__line">
                  </div>
                  <div className="section5__resume__work__dot">
                  </div>
                </div>
                <div className="section5__resume__work__text">
                  <div className="section5__resume__work__text__title">
                    <h3>Frontend Web Developer</h3>
                    <span>
                      August 2019 - Feb 2021
                    </span>
                  </div>
                  <span>Internship</span>
                  <p>Across the Globe ( ATG ), Bangalore</p>
                  <ul>
                    <li>
                      Worked on their company website <a href="https://atg.world/" target="_blank" rel="noopener noreferrer" >atg.world</a>. Learned and developed responsive web pages for all view port (desktop/tablet/mobile). Learned and worked on JavaScript libraries like React Js, jQuery and Material UI.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <h2>Education</h2>
              <div className="section5__resume__work" data-aos="fade-up" data-aos-delay="200" data-aos-once="true">
                <div className="section5__resume__work__dotline">
                  <div className="section5__resume__work__dot">
                  </div>
                  <div className="section5__resume__work__line">
                  </div>
                </div>
                <div className="section5__resume__work__text">
                  <div className="section5__resume__work__text__title">
                    <h3>B.tech, Computer science and Engineering</h3>
                    <span>
                      2016 - 2020
                    </span>
                  </div>
                  <span>
                    64.3%
                  </span>
                  <p>Arya college of engineering and information technology, Jaipur, Rajasthan</p>
                </div>
              </div>
              <div className="section5__resume__work" data-aos="fade-up" data-aos-delay="200" data-aos-once="true">
                <div className="section5__resume__work__dotline">
                  <div className="section5__resume__work__dot">
                  </div>
                  <div className="section5__resume__work__line">
                  </div>
                  <div className="section5__resume__work__dot">
                  </div>
                </div>
                <div className="section5__resume__work__text">
                  <div className="section5__resume__work__text__title">
                    <h3>12th, CBSE</h3>
                    <span>
                      2014 - 2015
                    </span>
                  </div>
                  <span>64.4%</span>
                  <p>CRB memorial public school, Mainpuri, Uttar Pradesh</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="section6" id="certifications">
      <div className="container">
        <div className="section4__work">
          <h1>Certifications</h1>
          <div className="section4__work__list__content">
            <Certifications />
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
}

export default HomePage;