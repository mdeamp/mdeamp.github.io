import React from 'react';
import './styles.scss';

import SectionHeader from '../../components/SectionHeader';
import { FaQuestionCircle } from 'react-icons/fa';
import { MdComputer } from 'react-icons/md';
import ScrollAnimation from 'react-animate-on-scroll';

const AboutSection = React.forwardRef((_props, ref) => {
  return (
    <div className="about-container" ref={ref}>
      <ScrollAnimation animateOnce={true} animateIn="animate__bounceInLeft" duration={2}>
        <SectionHeader title="Who am I?" icon={<FaQuestionCircle />} />
      </ScrollAnimation>
      <ScrollAnimation animateOnce={true} animateIn="animate__fadeIn" duration={2} delay={500}>
        <div className="about-me">
          <div className="about-me-img" />
        </div>
      </ScrollAnimation>
      <ScrollAnimation animateOnce={true} animateIn="animate__fadeIn" duration={1} delay={1000}>
        <div className="about-content">
          <div className="container">
            <div className="row">
              <div className="about-item col-12 col-md-4">
                <ScrollAnimation animateOnce={true} animateIn="animate__bounceInLeft" duration={1} delay={1500}>
                  <MdComputer className="about-item-icon" />
                  <h2>FullStack Developer</h2>
                  <p>I have been orking on both Front-End and Back-End applications within the NodeJS architecture.</p>
                </ScrollAnimation>
              </div>
              <div className="about-item col-12 col-md-4">
                <ScrollAnimation animateOnce={true} animateIn="animate__bounceInUp" duration={1} delay={1500}>
                  <MdComputer className="about-item-icon" />
                  <h2>FullStack Developer</h2>
                  <p>I have been orking on both Front-End and Back-End applications within the NodeJS architecture.</p>
                </ScrollAnimation>
              </div>
              <div className="about-item col-12 col-md-4">
                <ScrollAnimation animateOnce={true} animateIn="animate__bounceInRight" duration={1} delay={1500}>
                  <MdComputer className="about-item-icon" />
                  <h2>FullStack Developer</h2>
                  <p>I have been orking on both Front-End and Back-End applications within the NodeJS architecture.</p>
                </ScrollAnimation>
              </div>
            </div>
          </div>
        </div>
      </ScrollAnimation>

      <svg width="0" height="0">
        <linearGradient id="about-item-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{ stopColor: '#0ea383', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#17353f', stopOpacity: 1 }} />
        </linearGradient>
      </svg>
    </div>
  );
});

AboutSection.displayName = 'AboutPage';

export default AboutSection;
