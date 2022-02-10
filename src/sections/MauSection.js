import './MauSection.scss';

import { FaAngular, FaArrowDown, FaBitbucket, FaGitAlt, FaJs, FaNodeJs, FaNpm, FaReact, FaYarn } from 'react-icons/fa';
import { useEffect, useState } from 'react';

export default function MauSection() {
  const [icons, setIcons] = useState([]);
  useEffect(() => {
    const icons = [
      <FaAngular key="angular" />,
      <FaReact key="react" />,
      <FaNodeJs key="node-js" />,
      <FaNpm key="npm" />,
      <FaBitbucket key="bitbucket" />,
      <FaGitAlt key="git" />,
      <FaJs key="js" />,
      <FaYarn key="yarn" />,
    ];
    for (var i = icons.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = icons[i];
      icons[i] = icons[j];
      icons[j] = temp;
    }
    setIcons(icons);
  }, []);

  return (
    <div className="mau-container">
      <div className="mau-presentation">
        <p className="text">
          Hello! My name is <span className="colored">Maurício</span>.
        </p>
        <p className="text">
          Systems Analyst and Software Engineer<span className="underscore">_</span>
        </p>
        <button type="button" className="more btn btn-outline-light">
          More about me <FaArrowDown className="arrow" />
        </button>
      </div>

      <div className="mau-icons">{icons.map((icon) => icon)}</div>
    </div>
  );
}
