import React, { useEffect, useRef } from 'react';
// import './work.css';
import Lottie from 'lottie-web';
import animationData from './lottie.json';
import degree from "./hat.png";

const Work = () => {
  
  const container = useRef(null);

  useEffect(() => {
    Lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      autoplay: true,
      animationData: animationData
    });
  }, []);

  return (
    <section id='education' className="education-section">
      <div className="education-container">
        <div className="animation-container" ref={container}></div>
        <div className="education-content">
          <div className='details'>
            {[
              {
                year: "2024 - Present",
                course: "Bachelor of Technology (B-tech)",
                institution: "VIT University - Bhopal"
              },
              {
                year: "2016 - 2018",
                course: "Higher Secondary",
                institution: "SBBPSS Mirzapur"
              },
              {
                year: "2006 - 2016",
                course: "Secondary School",
                institution: "SBBPSS Mirzapur"
              }
            ].map((edu, index) => (
              <div className='data' key={index}>
                <div className='logo-container'>
                  <img className='logo1' src={degree} alt="Degree logo" />
                </div>
                <div className='demo'>
                  <p className='year'>{edu.year}</p>
                  <p className='course'>{edu.course}</p>
                  <p className='institution'>{edu.institution}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Work;
