import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';


function Navbar() {

  const runHamburger = () => {

    const secondPart = document.querySelector('.second-part');

    secondPart.style.opacity = 1;
  }
  const closeHamburger = () => {

    const secondPart = document.querySelector('.second-part');

    secondPart.style.opacity = 0;
  }

  return (
    <>
      <nav>
        <div className="left-side">
          <Link to="/">
            <div className="logo">
              <img src={logo} alt="" />
            </div>
          </Link>
          <div className="searchbar">
            <input type="text" className='text' placeholder='Enter Course, Category or Keyword' /><i className='fa fa-search'></i>
          </div>
        </div>
        <div className="right-side">
          <ul className='hamburger'>
            <Link to="/corporate-training"><li>Corporate Training</li></Link>
            <Link to="/courses"><li>Courses</li></Link>
            <Link to="/blog"><li>Blog</li></Link>
            <Link to="/contact"><li>Contact Us</li></Link>
          </ul>
        </div>
      </nav>
      <div className="three-lines">
        <i className='fa fa-bars' onClick={runHamburger}></i>
      </div>
      <section className='nav-2'>
        <div className="first-part">
          <div className="browse">
            <span>Browse</span> <br />
            <span>Category</span>
          </div>
          <div className="icon-up"><i className='fa fa-sort-desc'></i>
          </div>
        </div>
        <div className="second-part">
          <ul>
            <div className="cross"><i className='fa fa-times' onClick={closeHamburger}></i></div>
            <ul className='link_padding'>
              <li>
                <Link to="/webdevelopment" ><i className='fa fa-sort-desc right left-icon'></i>Web Development</Link>
              </li>
              <li>
                <Link to="/fullstackdevelopment"><i className='fa fa-sort-desc right left-icon'></i>FullStack Development</Link>
              </li>
              <li>
                <Link to="/graphicdesigning"><i className='fa fa-sort-desc right left-icon'></i>Graphic Designing</Link>
              </li>
              <li>
                <Link to="/unity"><i className='fa fa-sort-desc right left-icon'></i>UNITY & Game Development</Link>
              </li>
              <li>
                <Link to="/digital"><i className='fa fa-sort-desc right left-icon'></i>Digital Media Marketing</Link>
              </li>
              <li>
                <Link to="/datascience"><i className='fa fa-sort-desc right left-icon'></i>Data Science</Link>
              </li>

            </ul>
          </ul>
        </div>
      </section>
    </>
  )
}

export default Navbar
