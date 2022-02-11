import { useEffect, useRef, useState } from 'react';

import MauSection from './MauSection';
import AboutSection from './AboutSection';
import InfoSection from './InfoSection';

const Sections = () => {
  const [step, setStep] = useState(0);
  const aboutRef = useRef();
  const infoRef = useRef();

  const scrollTo = (ref) => window.scrollTo({ top: ref?.offsetTop, behavior: 'smooth' });

  const scrollToAbout = () => {
    if (step < 1) setStep(1);
    else scrollTo(aboutRef.current);
  };

  const scrollToInfo = () => {
    if (step < 2) setStep(2);
    else scrollTo(infoRef.current);
  };

  useEffect(() => {
    if (step === 1) scrollTo(aboutRef.current);
    if (step === 2) scrollTo(infoRef.current);
  }, [step]);

  return (
    <div>
      <MauSection scrollToAbout={scrollToAbout} />
      {step > 0 && <AboutSection scrollToInfo={scrollToInfo} ref={aboutRef} />}
      {step > 1 && <InfoSection ref={infoRef} />}
    </div>
  );
};

export default Sections;
