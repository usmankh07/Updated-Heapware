import React from 'react';
import mern from '../../images/mern.jpg'
import mean from '../../images/mean.jpg'
import lamp from '../../images/lamp.jpg'

function WebDevelopment() {
  return <>
    <section className='web-1'>
      <div className="web-heading">
        <h3>Web Development <br />Certification Courses</h3>
      </div>
    </section>
    <div className="section-5">
      <h3>Web Development BestSeller Courses</h3>
      <div className="flex">
        <div className="mern-image">
          <img src={mern} alt="" />
          <div className="titles">MERN Stack</div>
        </div>
        <div className="mern-image">
          <img src={mean} alt="" />
          <div className="titles">MEAN Stack</div>
        </div>
        <div className="mern-image">
          <img src={lamp} alt="" />
          <div className="titles">LAMP Stack</div>
        </div>
        <div className="mern-image">
          <img src={mern} alt="" />
          <div className="titles">MERN Stack</div>
        </div>
        <div className="mern-image">
          <img src={mern} alt="" />
          <div className="titles">MERN Stack</div>
        </div>
        <div className="mern-image">
          <img src={mern} alt="" />
          <div className="titles">MERN Stack</div>
        </div>
      </div>
      <div className="third-heading">
        <h1>LOAD MORE COURSES</h1>
      </div>
    </div>
    <div className="web-2">
      <h3>Web Development Course Description</h3>
      <h4>HTML</h4>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat quidem officiis, suscipit omnis praesentium ipsum repudiandae officia iusto nihil eum natus, illum temporibus magni velit recusandae voluptatum, veritatis minus odit?
      </p>
      <h4>CSS</h4>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat quidem officiis, suscipit omnis praesentium ipsum repudiandae officia iusto nihil eum natus, illum temporibus magni velit recusandae voluptatum, veritatis minus odit?
      </p>
      <h4>JavaScript</h4>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat quidem officiis, suscipit omnis praesentium ipsum repudiandae officia iusto nihil eum natus, illum temporibus magni velit recusandae voluptatum, veritatis minus odit?
      </p>
      <h4>ReactJS</h4>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat quidem officiis, suscipit omnis praesentium ipsum repudiandae officia iusto nihil eum natus, illum temporibus magni velit recusandae voluptatum, veritatis minus odit?
      </p>
    </div>
  </>;
}

export default WebDevelopment;
