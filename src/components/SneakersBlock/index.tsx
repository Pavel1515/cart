import { FC } from "react";
import { listType } from "../pages/Naw";

const SheakersBlock: FC<listType> = ({ title, price, urlPhoto, gender }) => {
  return (
    <div className="border border-black rounded w-44 h-72">
      <h2 className="text-center text-current h-8 text-base font-mono font-extrabold">
        {title}
      </h2>
      <div className="flex justify-center">
        <img
          className="w-40 h-40 border border-black rounded"
          src={urlPhoto}
          alt="photo"
        />
      </div>
      <div className="text-right mx-3 my-3">
        {gender === "men" ? "Мужские" : "Женские"}
      </div>
      <div className="text-center">{price} грн</div>
    </div>
  );
};

export default SheakersBlock;
