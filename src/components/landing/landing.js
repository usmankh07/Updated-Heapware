import React from 'react';
import About from '../About/About';
import FirstComponent from '../FirstComponent/FirstComponent';
import SecondComponent from '../SecondComponent/SecondComponent';
import Slider from '../Slider/Slider';
import Testimonial from '../Testimonial/Testimonial';

export const Landing = () => {
  return <>
  <Slider />
  <FirstComponent />
  <SecondComponent />
  <About />
  <Testimonial />
  </>;
};
