import React from "react";
import "./Dishes.css";
import pizza from "../assets/pizza.jpg";
import burger from "../assets/burger.png";
import dish1 from "../assets/dish1.png";
import dish2 from "../assets/dish2.png";
import dish3 from "../assets/dish3.png";
import dish4 from "../assets/dish4.png";
import dish5 from "../assets/dish5.png";
import dish6 from "../assets/dish6.png";
import dish7 from "../assets/dish7.png";

const Dishes = () => {
  return (
    <div id="dishes" className="dishes">
      <div className="container">
        <div className="dishes-title">
          Наши <span>Блюда</span>
          <div className="burgers">
            <div style={{ display: "flex", flexDirection: "column" }}>
              
              <div className="burgers-image">
                <img
                  src={dish7}
                  style={{ height: "450px" }}
                  className="pizza"
                  alt="Pizza"
                />
                Каччукко
              </div>
              <div className="burgers-image">
                <img
                  src={pizza}
                  style={{ height: "450px" }}
                  className="pizza"
                  alt="Pizza"
                />
                <div>Пицца</div>
              </div>
            </div>

            <div className="burgers-items">
              <div className="burger-item">
                <img src={burger} className="burger" alt="Burger" />
                <div className="burger-text">Гамбургер мини - 220 ₽</div>
              </div>
              <div className="burger-item">
                <img
                  src={dish1}
                  style={{ height: "160px" }}
                  className="burger"
                  alt="Burger"
                />
                <div className="burger-text">
                  Пицца на тесте из цветной капусты - 220 ₽
                </div>
              </div>
              <div className="burger-item">
                <img
                  src={dish2}
                  style={{ height: "160px" }}
                  className="burger"
                  alt="Burger"
                />
                <div className="burger-text">Командорский кальмар - 220 ₽</div>
              </div>
              <div className="burger-item">
                <img
                  src={dish3}
                  style={{ height: "160px" }}
                  className="burger"
                  alt="Burger"
                />
                <div className="burger-text">Ромовая баба - 220 ₽</div>
              </div>
              <div className="burger-item">
                <img
                  src={dish4}
                  style={{ height: "160px" }}
                  className="burger"
                  alt="Burger"
                />
                <div className="burger-text">Шпроты - 220 ₽</div>
              </div>
              <div className="burger-item">
                <img
                  src={dish5}
                  style={{ height: "160px" }}
                  className="burger"
                  alt="Burger"
                />
                <div className="burger-text">Пицца - 700 ₽</div>
              </div>
              <div className="burger-item">
                <img
                  src={dish6}
                  style={{ height: "160px" }}
                  className="burger"
                  alt="Burger"
                />
                <div className="burger-text">Лимонады - 300 ₽</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dishes;
