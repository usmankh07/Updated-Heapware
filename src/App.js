import Navbar from './components/Navbar/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Footer from './components/Footer';
import WebDevelopment from './components/WebDevelopment/WebDevelopment'
import FullStackDevelopment from './components/FullStackDevelopment/FullStackDevelopment'
import { Landing } from './components/landing/landing';
import Contact from './components/Contact/Contact';
import Team from './components/Team/Team';
import AboutUs from './components/AboutUs/AboutUs';




function App() {
  return (
    <>
    {/* Firstly we will make a router components,
    then we will put the fixed components in that,
    Here Navbar and footer is the fixed component in it.
    Then in routes, we have to make a new route for 
    every clickable component or even home page which
    will open automaitcally with this link
    (https://localhost:3000/) link here. This is how
    routing works in reactJS  */}
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/team" element={<Team />} />
          <Route path="/webdevelopment" element={<WebDevelopment />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/fullstackdevelopment" element={<FullStackDevelopment />} />
          
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
