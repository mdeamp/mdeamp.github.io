import { FaArrowDown } from 'react-icons/fa';
import './styles.scss';

const SectionNav = ({ text, onClick }) => {
  return (
    <button type="button" className="section-nav btn btn-outline-light" onClick={onClick}>
      {text} <FaArrowDown className="arrow" />
    </button>
  );
};

export default SectionNav;
