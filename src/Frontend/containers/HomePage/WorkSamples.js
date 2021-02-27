import React from 'react';
import moortipalace from '../../../assets/images/moortipalace.png';
import demostreaming from '../../../assets/images/demostreaming.png';
import buysu from '../../../assets/images/buysu.png';
import reactadmin from '../../../assets/images/react-adminpanel.png';


const ImageGrid = () => {

  return (
    <div className="img-grid">
      <div className="row">
        <div className="col-lg-4 col-md-6 img-wrap" 
        >
          <img src={moortipalace} alt="" 
          />
        </div>
        <div className="col-lg-4 col-md-6 img-wrap" 
        >
          <img src={demostreaming} alt="" 
          />
        </div>
        <div className="col-lg-4 col-md-6 img-wrap" 
        >
          <img src={buysu} alt="" 
          />
        </div>
        <div className="col-lg-4 col-md-6 img-wrap" 
        >
          <img src={reactadmin} alt="" 
          />
        </div>
      </div>
    </div>
  )
}

export default ImageGrid;