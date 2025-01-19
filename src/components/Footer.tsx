import logo2 from "../../public/assets/logo2.png";
import { Navigation } from "./Navigation";

export const Footer = () => {
  return (
    <footer
      id="contacts"
      className="mt-10 lg:mt-20 bg-white rounded-20 p-5 flex flex-col gap-16"
    >
      <div className="nav-footer flex justify-between items-start">
        <div className="logo">
          <img src={logo2} alt="Техно Плюс" className="h-full" />
        </div>
        <div className="nav-wrapper hidden md:block">
          <Navigation address={false}></Navigation>
        </div>
      </div>

      <div className="flex flex-col text-nowrap gap-2.5 text-3xl font-bold font-inter">
        <div className="phone-number">+7 (950) 700-04-04</div>
        <div className="phone-number">+7 (915) 633-04-04</div>
      </div>

      <div className="footer-of-footer flex flex-col md:flex-row justify-between md:items-end gap-5">
        <div className="left-side">
          <a href="mailto:89107603183@mail.ru">
            <div className="mail text-xl font-bold font-inter underline mb-4">
              89107603183@mail.ru
            </div>
          </a>
          <p className="text-black/50 text-xs font-normal font-inter">
            Политика
            <br />
            конфиденциальности
          </p>
        </div>
        <a target="_blank" href="https://yandex.ru/maps/-/CHauUXMW">
          <div className="text-xl md:text-3xl font-bold font-inter">
            г. Рославль ул. Мичурина 181 Б
          </div>
        </a>
      </div>
    </footer>
  );
};
