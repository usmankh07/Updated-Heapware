import React from "react";
import aboutus3 from '../../images/aboutus3.png'

function AboutUs3() {
  return (
    <>
      <div className="aboutus3">
        <div className="aboutus3_image">
          <img src={aboutus3} alt="" />
        </div>
        <div className="aboutus3_content">
          <div className="aboutus3_content_heading">
            <h2>Vision</h2>
          </div>
          <div className="aboutus3_content_paragraph">
            <p>How it Started?</p>
            <p>
              To become largest online learning ecosystem for online
              education, in partnership with corporates and colleges.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUs3;
