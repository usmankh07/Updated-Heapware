import React from 'react';
import TeamData from '../Data/TeamData';
import faceOverlay from '../../images/face_overlay.png'


function Team3() {

  return <>
    <div className="team">
      {TeamData.map((coursesData, index) => {
        return (
          <div className="face">
                <div className="face_pictures">
                    <div className="face_overlay">
                      <img src={faceOverlay} alt="" />
                    </div>
                  <div className="face_screen">
                  <div className="hover_icons">

                    <i class="fab fa-facebook"></i>
                    <i class="fab fa-instagram"></i>
                    <i class="fab fa-linkedin"></i>

</div>
                  </div><div className="face_image">

                  <img src={coursesData.img} alt="" />
                  </div>
                <div className="face_text">

                    <h5>{coursesData.name}</h5>
                    <h6>{coursesData.job}</h6>
                </div>
              
                </div>
              </div>




        );
      })}
    </div>
  </>;
}

export default Team3;
