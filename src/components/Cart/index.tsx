import "./style.css";
import Header from "../Header";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import {
  setAct,
  setActive,
  setCaount,
  setImageBig,
} from "../../redux/Slice/activeIndexSlice";

const cort = require("../../assets/img/corzina.png");
const image2 = require("../../assets/img/image 2.png");
const image3 = require("../../assets/img/image 3.png");
const image4 = require("../../assets/img/image 4.png");

const Cart = () => {
  const dispatch = useAppDispatch();
  const { act, imageBig, active, count } = useAppSelector(
    (state) => state.active
  );
  const image = [image2, image3, image4];
  const circle = ["bg-red-600", "bg-sky-900", "bg-yellow-400"];

  return (
    <div className=" xl:max-w-screen-xl   min-h-full overflow-y-hidden box-border overflow-x-hidden w-4/5 mx-auto">
      <Header />
      {act && (
        <div
          onClick={() => {
            dispatch(setAct(false));
          }}
          className="absolute top-0 right-0 cursor-pointer z-10"
        >
          <svg
            className="z-10 w-20  h-20 cursor-pointer"
            xmlns="http://www.w3.org/2000/svg"
            width="512"
            height="512"
            enableBackground="new 0 0 512 512"
            viewBox="0 0 512 512"
          >
            <style></style>
            <g id="cross" className="st2">
              <g className="st0">
                <path d="M112.5 112.5L401 401" className="st1"></path>
                <path d="M401 112.5L112.5 401" className="st1"></path>
              </g>
            </g>
            <path
              id="cross_copy"
              d="M268.064 256.75l138.593-138.593a8 8 0 10-11.314-11.313L256.75 245.436 118.157 106.843a8 8 0 00-11.313 0 7.998 7.998 0 000 11.313L245.436 256.75 106.843 395.343a7.999 7.999 0 000 11.314c1.562 1.562 3.609 2.343 5.657 2.343s4.095-.781 5.657-2.343L256.75 268.064l138.593 138.593c1.563 1.562 3.609 2.343 5.657 2.343s4.095-.781 5.657-2.343a8 8 0 000-11.314L268.064 256.75z"
            ></path>
          </svg>
        </div>
      )}
      <div className=" lg:flex">
        <div className="mx-auto lg:flex w-6/12 ">
          <div className=" w-full lg:w-6/12 h-full">
            <div
              className={
                act
                  ? "flex items-center inset-0 justify-center w-full absolute h-full bg-slate-300"
                  : " mx-auto h-2/4 w-3/4 lg:h-2/4 w-3/4 "
              }
            >
              <img
                className={
                  act ? "w-2/4 h-2/4" : "mx-auto h-2/4 w-3/4 lg:h-3/4 w-3/4"
                }
                onClick={() => {
                  dispatch(setAct(true));
                }}
                src={image[imageBig]}
                alt=""
              />
            </div>

            <div className="flex justify-center lg:mx-16 ">
              {image.map((el, index) => (
                <img
                  key={index}
                  src={el}
                  className={
                    active === index
                      ? "w-20 h-20 border rounded-md border-black "
                      : "cursor-pointer w-20 h-20"
                  }
                  onClick={() => {
                    dispatch(setImageBig(index));
                    dispatch(setActive(index));
                  }}
                  alt="img"
                />
              ))}
            </div>
          </div>
        </div>
        <div className=" lg:w-6/12">
          <h2 className="border-8 mx-auto w-3/6 my-10 text-rose-600 text-2xl flex justify-center  items-center h-20   border-cyan-600">
            12000 <span className="mx-2 text-xl text-emerald-600  "> ₽</span>
          </h2>
          <div className="my-10  flex justify-center items-center">
            <p>Цвет:</p>
            {circle.map((el, index) => (
              <div
                key={index}
                className={`w-6  mx-1  rounded-3xl cursor-pointer h-6  ${el}`}
                onClick={() => {
                  dispatch(setImageBig(index));
                  dispatch(setActive(index));
                }}
              ></div>
            ))}
          </div>

          <div className="md:flex items-center justify-evenly">
            <div className="flex justify-center">
              <div
                onClick={() => {
                  if (count > 1) dispatch(setCaount(count - 1));
                }}
                className="w-8 cursor-pointer font-extrabold flex justify-center items-center rounded-l-lg border border-black h-9"
              >
                <span className="text-red-700">-</span>
              </div>
              <div className="text-amber-700  w-8 flex justify-center items-center border border-black h-9">
                <span>{count}</span>
              </div>
              <div
                onClick={() => {
                  dispatch(setCaount(count + 1));
                }}
                className="w-8  cursor-pointer  font-extrabold text-green-500 flex justify-center items-center rounded-r-lg border border-black h-9"
              >
                <span>+</span>
              </div>
            </div>
            <p className="mx-auto m-4 sm:pt-1 w-40 text-center h-9 border  border-black rounded-2xl bg-amber-600 cursor-pointer ">
              Купить в 1 клик
            </p>
            <div className="mx-auto md:mx-0  flex w-36 h-9 items-center items-centerborder border border-black rounded-2xl bg-amber-600 cursor-pointer   ">
              <img src={cort} className="mx-3 w-4 h-4" alt="" />
              <p className="mx-3">В корзину</p>
            </div>
          </div>

          <div className="my-6 h-9 flex justify-evenly">
            <div className="cursor-pointer hover:border-b  border-black">
              Описание
            </div>
            <div className="cursor-pointer hover:border-b  border-black">
              Характеристики
            </div>
            <div className="cursor-pointer hover:border-b  border-black">
              Отзывы
            </div>
          </div>
          <div className="my-14 flex justify-evenly">
            <ul>
              <li>Категория</li>
              <li>Производитель</li>
              <li>Бренд</li>
              <li>Гарантия</li>
            </ul>
            <ul>
              <li>Кросовки</li>
              <li>Производитель</li>
              <li>Nike</li>
              <li>2 года</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Cart;
