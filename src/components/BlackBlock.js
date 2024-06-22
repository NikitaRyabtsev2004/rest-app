import React from 'react';
import './BlackBlock.css';
import blackBg from '../assets/black-bg.jpg';

const BlackBlock = () => {
  const handleScroll = (id, e) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div className="black-block" style={{ backgroundImage: `url(${blackBg})` }}>
      <div className="container">
        <div className="black-holder">
          <div className="left">
            <div className="left-title">
              Отпразднуйте в одном из <br />самых лучших ресторанов.
            </div>
            <div className="left-text">
              Только в этом месяце бизнес-ланч от 250 ₽
            </div>
          </div>
          <div className="right">
            <div className="right-button">
              <div className="right-btn" style={{cursor:"pointer"}} onClick={(e) => handleScroll('home', e)}>ЗАКАЗ СТОЛИКА</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlackBlock;