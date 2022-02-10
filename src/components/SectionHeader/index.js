import './styles.scss';

const SectionHeader = ({ title }) => {
  return (
    <div className="section-header">
      <h1 className="display-5">
        <span>
          {title}
          <span className="underscore">_</span>
        </span>
      </h1>
    </div>
  );
};

export default SectionHeader;
