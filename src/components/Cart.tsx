import React from "react";
import "../scss/Cart.scss";
import { useAppDispatch, useAppSelector } from "../redux/store";
import {
  setImageBig,
  setActive,
  setCaount,
} from "../redux/Slice/activeIndexSlice";
import { useState } from "react";

const Cart: React.FC = () => {
  const [act, setAct] = useState(false);
  const image = ["image 2.png", "image 3.png", "image 4.png"];
  const circle = ["red", "blue", "yellow"];
  const imageBig = useAppSelector((state) => state.active.imageBig);
  const active = useAppSelector((state) => state.active.active);
  const count = useAppSelector((state) => state.active.count);
  const dispatch = useAppDispatch();
  return (
    <div className="container">
      <header>
        <img src="./Vector.svg" className="logo" alt="" />
        <h1>Nike Air Force Travis Scott</h1>
        <div className="mini_cart">
          <img src="./corzina.png" alt="" />
          <p>{count}</p>
        </div>
      </header>
      <div className="container_cart">
        <div className="slider">
          <div className={act ? "big_img bin" : "big_img"}>
            {act && (
              <div
                onClick={() => {
                  setAct(false);
                }}
                className="close"
              >
                <img src="./close.svg" alt="" />
              </div>
            )}
            <div className="big_img_container">
            <img
              onClick={() => {
                setAct(true);
              }}
              className="big "
              src={"./" + image[imageBig]}
              alt=""
            />
            </div>
           
          </div>

          <div className="mini_slider">
            {image.map((el, index) => (
              <img
                key={index}
                onClick={() => {
                  dispatch(setImageBig(index));
                  dispatch(setActive(index));
                }}
                className={active === index ? "active" : ""}
                src={"./" + el}
                alt="img"
              />
            ))}
          </div>
        </div>
        <div className="cart_interfece">
          <h2 className="price">
            12000 <span> ₽</span>
          </h2>
          <div className="color">
            <p>Цвет:</p>
            {circle.map((el, index) => (
              <div
                key={index}
                onClick={() => {
                  dispatch(setImageBig(index));
                  dispatch(setActive(index));
                }}
                className={el}
              ></div>
            ))}
          </div>
          <div className="bay_container">
            <div className="add_count">
              <div
                onClick={() => {
                  if (count > 1) dispatch(setCaount(count - 1));
                }}
                className="minus"
              >
                <span>-</span>
              </div>
              <div className="caunt">
                <span>{count}</span>
              </div>
              <div
                onClick={() => {
                  dispatch(setCaount(count + 1));
                }}
                className="plus"
              >
                <span>+</span>
              </div>
            </div>
            <p className="onOne">Купить в 1 клик</p>
            <div className="v_cart">
              <img src="./corzina.png" alt="" />
              <p>В корзину</p>
            </div>
          </div>
          <div className="information">
            <div className="menu_information">
              <div className="menu">Описание</div>
              <div className="menu">Характеристики</div>
              <div className="menu">Отзывы</div>
            </div>
            <div className="inform">
              <ul className="categori_inform">
                <li>Категория</li>
                <li>Производитель</li>
                <li>Бренд</li>
                <li>Гарантия</li>
              </ul>
              <ul className="significance_inform">
                <li>Кросовки</li>
                <li>Производитель</li>
                <li>Nike</li>
                <li>2 года</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <p className="version">Версия на TypeScript</p>
    </div>
  );
};
export default Cart;
