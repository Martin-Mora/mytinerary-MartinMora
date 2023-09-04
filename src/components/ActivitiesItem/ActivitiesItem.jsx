import { useState } from "react";
import '../ActivitiesItem/activitiesItem.css'


const ActivitiesItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`ActivitiesItem ${isOpen ? 'open' : ''}`}>
      <div className="ActivitiesItem-header" onClick={toggleAccordion}>
        {title}<i className='bx bx-chevrons-down'></i>
      </div>
      <div className="ActivitiesItem-content-container">
        <h2 className="Activities-title">Activities under construction</h2>
        <div className="ActivitiesItem-content">{content}</div>
      </div>
    </div>
  );
};

export default ActivitiesItem;