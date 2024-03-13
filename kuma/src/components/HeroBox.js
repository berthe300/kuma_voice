import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrophone, faPlay } from '@fortawesome/free-solid-svg-icons';
import './HomePage.css';

const HeroBox = ({ title, buttonText, description }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`hero-box ${title.toLowerCase()}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <button className="button">
        <FontAwesomeIcon icon={title === 'Speak' ? faMicrophone : faPlay} />
        {buttonText}
      </button>
      <p>{description}.</p>
      <CSSTransition
        in={isHovered}
        timeout={300}
        classNames="pulse"
        unmountOnExit
      >
        <div className="overlay"></div>
      </CSSTransition>
    </div>
  );
};

export default HeroBox;
