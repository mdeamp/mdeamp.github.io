import React from 'react';
import './styles.scss';

import SectionHeader from '../../components/SectionHeader';
import { FaLightbulb } from 'react-icons/fa';
import ScrollAnimation from 'react-animate-on-scroll';

const InfoSection = React.forwardRef((_props, ref) => {
  return (
    <div className="info-container" ref={ref}>
      <ScrollAnimation animateOnce={true} animateIn="animate__bounceInLeft" duration={2}>
        <SectionHeader title="Other Info" icon={<FaLightbulb />} />
      </ScrollAnimation>
    </div>
  );
});

InfoSection.displayName = 'InfoSection';

export default InfoSection;
