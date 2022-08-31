import { useAppDispatch, useAppSelector } from "../../../redux/store";
import { FC, useEffect } from "react";
import { fetchList } from "../../../redux/Slice/listSlice";
import SheakersBlock from "../../SneakersBlock";
import Header from "../../Header";

export type listType = {
  id: string;
  title: string;
  urlPhoto: string;
  gender: string;
  price: string;
};
const Naw: FC = () => {
  const { list } = useAppSelector((state) => state.list);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchList());
  }, []);

  return (
    <div className=" xl:max-w-screen-xl   min-h-full overflow-y-hidden box-border overflow-x-hidden w-4/5 mx-auto">
      <Header />
      <div className="flex flex-wrap justify-center">
        {list.length &&
          list.map((obj: listType) => {
            return (
              <div className="m-12" key={obj.id}>
                <SheakersBlock {...obj} />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Naw;
