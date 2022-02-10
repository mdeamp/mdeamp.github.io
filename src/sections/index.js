import MauSection from './MauSection';
import AboutSection from './AboutSection';
import { useCallback, useRef } from 'react';
import InfoSection from './InfoSection';

const Sections = () => {
  const aboutRef = useRef();
  const infoRef = useRef();

  const scrollTo = (ref) => window.scrollTo({ top: ref?.offsetTop, behavior: 'smooth' });

  const scrollToAbout = useCallback(() => {
    scrollTo(aboutRef.current);
  }, [aboutRef]);

  const scrollToInfo = useCallback(() => {
    scrollTo(infoRef.current);
  }, [infoRef]);

  return (
    <div>
      <MauSection scrollToAbout={scrollToAbout} />
      <AboutSection scrollToInfo={scrollToInfo} ref={aboutRef} />
      <InfoSection ref={infoRef} />
    </div>
  );
};

export default Sections;
