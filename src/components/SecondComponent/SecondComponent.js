import React from "react";
import u1 from "../../images/u1.jpg";
import u2 from "../../images/u2.jpg";
import u3 from "../../images/u3.jpg";
import u4 from "../../images/u4.jpg";
import u5 from "../../images/u5.jpg";
import courses from "../Data/Courses";

function SecondComponent() {
  return (
    <>
      <div className="section-3">
        <div className="first-heading">
          <h1>Our Top University Partners</h1>
        </div>

        <div className="university-images">
          <div className="image">
            <img src={u1} alt="" />
          </div>
          <div className="image">
            <img src={u2} alt="" />
          </div>
          <div className="image">
            <img src={u3} alt="" />
          </div>
          <div className="image">
            <img src={u4} alt="" />
          </div>
          <div className="image">
            <img src={u5} alt="" />
          </div>
        </div>
      </div>
      <div className="section-4">
        <div className="second-heading">
          <h1>Trending Courses</h1>
        </div>
        <div className="courses">
          {courses.map((coursesData, index) => {
            return (
              <div className="courses_card">
                <div className="course_name">{coursesData.name}</div>
                <div className="courses_img">
                  <img src={coursesData.img} alt="" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="third-heading">
        <button>See More</button>
      </div>
    </>
  );
}

export default SecondComponent;
