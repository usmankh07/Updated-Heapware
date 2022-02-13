import React, { useEffect, useState } from 'react';
import data from '../Data/data'


export default function Slider() {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);


  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }
    , [index, people]);

  useEffect(() => {

    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 3000);
    return () => clearInterval(slider);

  }, [index])

  return (

    <section className='slider-container'>
      {people.map((person, personIndex) => {
        const { id, img } = person;
        let position = 'nextSlide';
        if (personIndex === index) {
          position = 'activeSlide';
        }
        if (personIndex === index - 1 || (index === 0 && personIndex === people.length - 1)
        ) {
          position = 'lastSlide'
        }
        return (
          <article className={position} key={id}>
            <img src={img} alt="" className='person-img' />
          </article>
        )
      })}
      <button className="prev" onClick={() => setIndex(index - 1)}>
        <i className='fa fa-angle-left'></i>
      </button>
      <button className="next" onClick={() => setIndex(index + 1)}>
        <i className='fa fa-angle-right'></i>
      </button>
      <div className="first-button">
        <button>Enroll Now</button>
      </div>



    </section>
  )
}