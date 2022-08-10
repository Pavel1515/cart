import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import {
  setImageBig,
  setActive,
  setCaount,
} from "../redux/Slice/activeIndexSlice";
const Cart = () => {
  const image = ["image 2.png", "image 3.png", "image 4.png"];
  const circle = ["red", "blue", "yellow"];
  const imageBig = useSelector((state) => state.active.imageBig);
  const active = useSelector((state) => state.active.active);
  const count = useSelector((state) => state.active.count);
  const dispatch = useDispatch();
  return (
    <div class="container">
      <header>
        <img src="./Vector.svg" alt="" />
        <h1>Nike Air Force Travis Scott</h1>
        <div class="mini_cart">
          <img src="./corzina.png" alt="" />
          <p>{count}</p>
        </div>
      </header>
      <div class="container_cart">
        <div class="slider">
          <div class="big_img">
            <img class="big" src={"./" + image[imageBig]} alt="" />
          </div>

          <div class="mini_slider">
            {image.map((el, index) => (
              <img
                onClick={() => {
                  dispatch(setImageBig(index));
                  dispatch(setActive(index));
                }}
                class={active === index ? "active" : ""}
                src={"./" + el}
                alt="img"
              />
            ))}
          </div>
        </div>
        <div class="cart_interfece">
          <h2 class="price">
            12000 <span> ₽</span>
          </h2>
          <div class="color">
            <p>Цвет:</p>
            {circle.map((el, index) => (
              <div
                onClick={() => {
                  dispatch(setImageBig(index));
                  dispatch(setActive(index));
                }}
                class={el}
              ></div>
            ))}
          </div>
          <div class="bay_container">
            <div class="add_count">
              <div
                onClick={() => {
                  if (count > 1) dispatch(setCaount(count - 1));
                }}
                class="minus"
              >
                <span>-</span>
              </div>
              <div class="caunt">
                <span>{count}</span>
              </div>
              <div
                onClick={() => {
                  dispatch(setCaount(count + 1));
                }}
                class="plus"
              >
                <span>+</span>
              </div>
            </div>
            <p class="onOne">Купить в 1 клик</p>
            <div class="v_cart">
              <img src="./corzina.png" alt="" />
              <p>В корзину</p>
            </div>
          </div>
          <div class="information">
            <div class="menu_information">
              <div class="menu">Описание</div>
              <div class="menu">Характеристики</div>
              <div class="menu">Отзывы</div>
            </div>
            <div class="inform">
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
