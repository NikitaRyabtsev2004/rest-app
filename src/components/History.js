import React from 'react';
import './History.css';
import img1 from '../assets/1.png';
import img2 from '../assets/2.png';
import img3 from '../assets/3.png';

const History = () => {
  return (
    <div id="history" className="history">
      <div className="container">
        <div className="history-holder">
          <div className="history-info">
            <div className="history-title">
              Наша <span>История</span>
            </div>
            <div className="history-desc">
              Как и у любого другого самобытного места, у нас есть своя, особая история. Идея ресторана пришла основателям неожиданно. Во время прогулки по лесу создатель нашего ресторана застрял в сотнях километров от ближайшего населенного пункта. Вдали от цивилизации и связи им пришлось на время обустроить себе нехитрый быт, добывать и готовить себе еду.
            </div>
            <div className="history-number">
              <div className="number-item">
                93 <span>Напитки</span>
              </div>
              <div className="number-item">
                206 <span>Еда</span>
              </div>
              <div className="number-item">
                71 <span>Закуски</span>
              </div>
            </div>
          </div>
          <div className="history-images">
            <img className="images-1" src={img1} alt="Image 1" />
            <img className="images-2" src={img2} alt="Image 2" />
            <img className="images-3" src={img3} alt="Image 3" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;