import React from 'react';
import fullStack from "../../images/fullstackdevelopment.png"
import { Accordion } from 'react-bootstrap'





function FullStackDevelopment() {
  return <>
    <section className='section-1'>
      <div className="section1-heading" >
        <h2>Full Stack Web Development <br /> Internship Program</h2>
        <h3>Build a complete web  product & Earn an Edureka Internship Certificate </h3>
        <ul>
          <li>1. Build a complete web product like Zomato, Uber, etc. from scratch</li>
          <li>2. Master Web Development, JavaScript & MERN Stack</li>
          <li>3. Start building your product from Day 1 with 100% hands-on training</li>
          <li>4. Live instructor-led online classes by industry experts</li>
        </ul>
      </div>
      <div className="section1-image">
        <div className="section1-image-parent">
          <img src={fullStack} alt="" />
        </div>
      </div>
    </section>
    <section className='section--2'>
      <h3>Free Orientation</h3>
      <h4>Attend the free orientation for:</h4>
      <ul>
        <li>1. A live instructor-led Web App building session</li>
        <li>2. Current Full-Stack job opportunities</li>
        <li>3. Internship Program Details:</li>
        <li>4.Instructor-led program</li>
        <li>5. Program Schedule</li>
        <li>6. Hands-on projects</li>
      </ul>
    </section>
    <section className='section--3'>
      <h2>Program Benefits</h2>
      <div className="section--3-card">
        <div className="card1">
          <p>
            Access Career Services & <br /> Job Assistance
          </p>
        </div>
        <div className="card1">
          <p>
            Learn in Live, Instructor-Led<br />     Online Sessions
          </p>
        </div>
        <div className="card1">
          <p>
            Get practical experience in <br />building a real-world <br />product from scratch
          </p>
        </div>
      </div>
    </section>
    <section className='section--4'>
      <h3>Why MERN Stack?</h3>
      <ul>
        <li>1. It makes the development easier and faster</li>
        <li>2. Used in top tech companies such as Walmart, Paypal, Linkedin, etc.</li>
        <li>3. Only the knowledge of JavaScript is essential fro both front-end and back-end development</li>
      </ul>
    </section>
    <section className='section--5'>
      <div className="heading">
        <h1>FAQs</h1>
        <div className="faq">
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>Internship and Certificates</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                est laborum.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Fees and Payment</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                est laborum.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>Contact Us</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                est laborum.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
    </section>
    {/* Footer Code */}
  </>;
}

export default FullStackDevelopment;
