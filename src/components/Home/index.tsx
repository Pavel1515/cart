import Header from "../Header";
import {NavLink} from "react-router-dom";

const Home = () => {
    return (
        <>
            <div
                className=" xl:max-w-screen-xl   min-h-full overflow-y-hidden box-border overflow-x-hidden w-4/5 mx-auto">
                <Header/>
                <div className=" min-h-screen w-full flex items-center justify-center">
                    <div>
                        <div className=" text-center text-rose-900">Магазин кросовкок :</div>
                        <div className="flex flex-col">
                            <NavLink to={'/cart'}>
                                <div
                                    className="my-2 border text-center border-black h-10 p-2  text-rose-900 font-black hover:bg-orange-500 rounded transition-all"
                                >
                                    Карточка товара
                                </div>
                            </NavLink>
                            <NavLink to={'/contact'}>
                                <div

                                    className=" border text-center border-black h-10 p-2  text-rose-900 font-black hover:bg-orange-500 rounded transition-all"
                                >
                                    Контакты
                                </div>
                            </NavLink>
                            <NavLink to={'/revies'}>
                                <div

                                    className="my-2 border text-center border-black h-10 p-2  text-rose-900 font-black hover:bg-orange-500 rounded transition-all"
                                >
                                    Отзывы
                                </div>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Home;
