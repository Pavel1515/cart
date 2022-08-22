import Header from "../Header";
const Contact = () => {
  return (
    <div className=" xl:max-w-screen-xl   min-h-full overflow-y-hidden box-border overflow-x-hidden w-4/5 mx-auto">
      <Header />
      <h2 className="w-20 my-6 mx-auto text-xl">Контакты:</h2>
      <div className="mt-4 flex items-center justify-between sm:mt-16 w-2/4">
        <p className="text-lg text-indigo-300">Наш адрес:</p>
        <p className="text-right text-lg">Молдова,Кишинев дом 7</p>
      </div>
      <p className="text-indigo-300">Самовывоз доступен</p>
      <p className="mx-4">Доставка любыми почтовами службами</p>
      <p className="text-indigo-300">Режим работы</p>
      <p className="mx-4">-Понедельник с 8:00 по 20:00</p>
      <p className="mx-4">-Вторник с 8:00 по 20:00</p>
      <p className="mx-4">-Среда с 8:00 по 20:00</p>
      <p className="mx-4">-Четверг с 8:00 по 20:00</p>
      <p className="mx-4">-Пятница с 8:00 по 20:00</p>
      <p className="mx-4">-Субота с 8:00 по 20:00</p>
      <p className="mx-4">-Воскресениье с 8:00 по 20:00</p>
      <p className="text-indigo-300">Наш телефон</p>
      <p className="mx-4 text-left text-blue-400 my-4">+373 645464 54 5</p>
      <p className="text-indigo-300">EMAIL</p>
      <p className="mx-4">ppvr3407@gmail.com</p>
    </div>
  );
};
export default Contact;
