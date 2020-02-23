import React from "react";
// STYLES
import "../styles/Design.scss";
import photo1 from "../stockPhotos/PIv2.0 copy.jpg";
import photo2 from "../stockPhotos/coffee L logo v1.1.jpg";
import photo3 from "../stockPhotos/WEBSITE.png";

const Design = () => {
  return (
    <div className='D-Component'>
      <div className='D-Page'>
        <h1 className='Page-Title'>Design</h1>
        <img className='D-Image' src={photo1} alt='' />
      </div>
      <div className='D-Page'>
        <img className='D-Image' src={photo2} alt='' />
      </div>
      <div className='D-Page'>
        <img className='D-Image' src={photo3} alt='' />
      </div>
    </div>
  );
};

export { Design };
