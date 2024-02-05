import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Events from './components/Events';
import CourseMaterial from './components/CourseMaterial';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Copyright from './components/Copyright';
import Blogs from './components/Blog';

function App() {
  return (
    <Router>
        <Header />
      <Routes>

        <Route path="/Mekanika_webpage" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/events" element={<Events />} />
        <Route path="/course-material" element={<CourseMaterial />} />
        <Route path="/projects" element={<Projects />} />

        
      </Routes>
      <Footer />
      <Copyright/>
    </Router>
  );
}

export default App;
