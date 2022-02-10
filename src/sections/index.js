import MauSection from './MauSection';
import AboutSection from './AboutSection';
import { useCallback, useRef } from 'react';

const Sections = () => {
  const aboutRef = useRef();

  const scrollToAbout = useCallback(() => {
    window.scrollTo({ top: aboutRef.current?.offsetTop, behavior: 'smooth' });
  }, [aboutRef]);

  return (
    <div>
      <MauSection scrollToAbout={scrollToAbout} />
      <AboutSection ref={aboutRef} />
    </div>
  );
};

export default Sections;
