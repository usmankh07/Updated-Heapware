import React, { useState, useEffect } from "react";
import TestimonialData from "../Data/TestimonialData";

function Testimonial() {
  const [people, setPeople] = useState(TestimonialData);
  const [index, setIndex] = React.useState(0);

  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 5000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

  return (
    <>
      <div className="first-heading">
        <h1>TESTIMONIAL</h1>
      </div>
      <div className="btnslider">
        <div className="slidercard">
          {TestimonialData.map((newapi, personIndex) => {
            let position = "nextSlide";
            if (personIndex === index) {
              position = "activeSlide";
            }
            if (
              personIndex === index - 1 ||
              (index === 0 && personIndex === people.length - 1)
            ) {
              position = "lastSlide";
            }

            return (
              <article className={position} key={newapi.id}>
                {" "}
                <img src={newapi.img} alt="" />
                <h4>{newapi.name}</h4>
                <h6>{newapi.tittle}</h6>
                <p>{newapi.content}</p>
              </article>
            );
          })}
        </div>

        <div className="sliderbtn">
          <div className="b1" onClick={() => setIndex(index - 1)}></div>
          {/* <div className='b2'></div> */}
          <div className="b3" onClick={() => setIndex(index + 1)}></div>
        </div>
      </div>
    </>
  );
}

export default Testimonial;
