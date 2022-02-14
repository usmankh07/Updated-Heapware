import React, { useState } from 'react';
import Web from '../Data/Web.js'

function WebDevelopment() {
  const [filter, setFilter] = useState('');

  const searchText = (e) => {
    setFilter(e.target.value);
  }


  let datasearch = Web.filter(item => {
    return Object.keys(item).some(key => 
         item[key].toString().toLowerCase().includes(filter.toString().toLowerCase())
      )
  })


  return <>

    <section className='web-1'>
      <div className="web-heading">
        <h3>Web Development <br />Certification Courses</h3>

      </div>
    </section>
    <div className="section-5">
      <h3>Web Development BestSeller Courses</h3>
      <div className="searchbar">
        <input type="text"
          className='text'
          placeholder='Enter Course, Category or Keyword'
          value={filter}
          onChange={searchText.bind(this)}
        /><i className='fa fa-search'></i>
      </div>
      <div className="courses">
        {datasearch.map((coursesData, index) => {
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
