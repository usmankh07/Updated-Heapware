import React from "react";
import aboutus4 from "../../images/aboutus4.png"

function AboutUs4() {
  return (
    <>
      <div className="aboutus4">
        <div className="aboutus4_content">
          <div className="aboutus4_content_heading">
            <h2>Mission</h2>
          </div>
          <div className="aboutus4_content_paragraph">
            <p>How it's Going?</p>
            <p>
              To become largest online learning ecosystem for continuing
              education, in partnership with corporates and academia.
            </p>
          </div>
        </div>
        <div className="aboutus4_image">
          <img src={aboutus4} alt="" />
        </div>
      </div>
    </>
  );
}

export default AboutUs4;
