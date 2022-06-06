import React from 'react';
import './App.css';
import { About, Footer, Skills, Testimonial, Works, Header } from './components/containers';
import { NavBar } from './components';
function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <About />
      <Skills />
      <Works />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default App;
