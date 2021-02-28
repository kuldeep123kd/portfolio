import React from "react";
import web from "../../../assets/images/web.webp";
import rhcsa from "../../../assets/images/rhcsa.webp";
import rhce from "../../../assets/images/rhce.webp";
import internshala from "../../../assets/images/internshala.webp";

const Certifications = () => {
  return (
    <div className="img-grid">
      <div className="row">
        <div className="col-lg-4 col-md-6 img-wrap" data-aos="fade-up" data-aos-delay="200" data-aos-once="true">
          <div className="card">
            <img src={web} className="card-img-top" alt="webdesign" />
            <div className="card-body">
              <h2 className="card-title">Responsive Web Design</h2>
              <p className="card-text">FreeCodeCamp</p>
              <a className="img-wrap__text__link" href="https://www.freecodecamp.org/certification/k_d_killshot/responsive-web-design" target="_blank" rel="noopener noreferrer" >See Credential</a>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 img-wrap" data-aos="fade-up" data-aos-delay="200" data-aos-once="true">
          <div className="card">
            <img src={rhcsa} className="card-img-top" alt="..." />
            <div className="card-body">
              <h2 className="card-title">Redhat Certified System Administrator</h2>
              <p className="card-text">Redhat</p>
              <a className="img-wrap__text__link" href="https://www.redhat.com/rhtapps/certification/verify/?certId=180-293-656" target="_blank" rel="noopener noreferrer" >See Credential</a>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 img-wrap" data-aos="fade-up" data-aos-delay="200" data-aos-once="true">
        <div className="card">
            <img src={rhce} className="card-img-top" alt="..." />
            <div className="card-body">
              <h2 className="card-title">Redhat Certified Engineer</h2>
              <p className="card-text">Redhat</p>
              <a className="img-wrap__text__link" href="https://www.redhat.com/rhtapps/certification/verify/?certId=180-293-656" target="_blank" rel="noopener noreferrer" >See Credential</a>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 img-wrap" data-aos="fade-up" data-aos-delay="200" data-aos-once="true">
          <div className="card">
            <img src={internshala} className="card-img-top" alt="..." />
            <div className="card-body">
              <h2 className="card-title">Business Communication Skills</h2>
              <p className="card-text">Internshala</p>
              <a className="img-wrap__text__link" href="https://trainings.internshala.com/verify_certificate" target="_blank" rel="noopener noreferrer" >See Credential</a>
              <code>502F9621-4928-09D9-5E46-EFB5092CE6D8</code>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certifications;
