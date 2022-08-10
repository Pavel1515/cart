import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import {
  setImageBig,
  setActive,
  setCaount,
} from "../redux/Slice/activeIndexSlice";
import React, { useState } from "react";




const Cart:React.FC <Cart>= () => {
  const [act, setAct] = useState(false);
  const image = ["image 2.png", "image 3.png", "image 4.png"];
  const circle = ["red", "blue", "yellow"];
  const imageBig :number= useSelector((state) => state.active.imageBig);
  const active:number = useSelector((state) => state.active.active);
  const count:number = useSelector((state) => state.active.count);
  const dispatch = useDispatch();
  return (
    <div className="container">
      <header>
        <img src="./Vector.svg" alt="" />
        <h1>Nike Air Force Travis Scott</h1>
        <div className="mini_cart">
          <img src="./corzina.png" alt="" />
          <p>{count}</p>
        </div>
      </header>
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
      <div className="container_cart">
        <div className="slider">
          <div className={act ? "big_img bin" : "big_img"}>
            <img
              onClick={() => {
                setAct(true);
              }}
              className="big "
              src={"./" + image[imageBig]}
              alt=""
            />
          </div>

          <div className={act ? "mini_slider bin" : "mini_slider"}>
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
              <p>Категория</p>
              <p>Кросовки</p>
              <p>Производитель</p>
              <p>Nike</p>
              <p>Гарантия</p>
              <p>2 года</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Cart;
