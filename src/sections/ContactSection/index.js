import React from 'react';
import './styles.scss';

import ScrollAnimation from 'react-animate-on-scroll';
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';

const ContactSection = React.forwardRef((_props, ref) => {
  const openLinkedIn = () => window.open('https://linkedin.com/in/mdeamp', '_blank');
  const openGitHub = () => window.open('https://github.com/mdeamp', '_blank');

  return (
    <div className="contact-container" ref={ref}>
      <h4>Here&apos;s where you can find me! :)</h4>
      <h6>(mostly as &quot;mdeamp&quot;)</h6>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6">
            <ScrollAnimation className="contact-content" animateIn="animate__zoomIn" animateOnce>
              <div className="contact-content-icon" onClick={openLinkedIn}>
                <FaLinkedin />
              </div>
            </ScrollAnimation>
          </div>
          <div className="col-12 col-md-6">
            <ScrollAnimation className="contact-content" animateIn="animate__zoomIn" animateOnce>
              <div className="contact-content-icon" onClick={openGitHub}>
                <FaGithubSquare />
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </div>

      <div className="contact-footer">Made with ❤️, by mdeamp, 2023</div>
    </div>
  );
});

ContactSection.displayName = 'ContactSection';

export default ContactSection;
