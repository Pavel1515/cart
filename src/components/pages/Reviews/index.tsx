import Header from "../../Header";
const Reviews = () => {
  return (
    <div className=" xl:max-w-screen-xl   min-h-full overflow-y-hidden box-border overflow-x-hidden w-4/5 mx-auto">
      <Header />
      <div className="my-8">
        <p>В проекте задействаны такие технологии:</p>
        <ul>
          <li>-React</li>
          <li>-TailwindCss</li>
          <li>-Redux-toolkit</li>
          <li>-createAsyncThunk</li>
          <li>-Axioz</li>
          <li></li>
        </ul>
      </div>
    </div>
  );
};
export default Reviews;
