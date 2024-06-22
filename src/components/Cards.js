import React from 'react';
import './Cards.css';
import card from '../assets/card.png';

const Cards = () => {
  return (
    <div className="cards">
      <div className="container">
        <div className="cards-holder">
          <div className="card">
            <div className="card-image">
              <img className="card-img" src={card} alt="Magic Atmosphere" />
            </div>
            <div className="card-title">
              Магическая <span>Атмосфера</span>
            </div>
            <div className="card-desc">
              В нашем заведении царит магическая атмосфера
              наполненная вкусными ароматами.
            </div>
          </div>
          <div className="card">
            <div className="card-image">
              <img className="card-img" src={card} alt="Best Quality Food" />
            </div>
            <div className="card-title">
              Лучшее качество <span>Еды</span>
            </div>
            <div className="card-desc">
              Качество нашей Еды - отменное!
            </div>
          </div>
          <div className="card">
            <div className="card-image">
              <img className="card-img" src={card} alt="Affordable Food" />
            </div>
            <div className="card-title">
              Недорогая <span>Еда</span>
            </div>
            <div className="card-desc">
              Стоимость нашей Еды зависит только от ее количества. Качество всегда на высоте!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;