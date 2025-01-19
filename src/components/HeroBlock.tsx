import camera from "../../public/assets/camera.png";

export const HeroBlock = () => {
  return (
    <section className="flex flex-col lg:flex-row gap-5 xl:gap-10 w-full">
      <div className="hero flex flex-col gap-5 xl:gap-10">
        <div className="bg-white grow rounded-20 flex flex-col justify-between gap-5 p-5 2xl:p-8">
          <div className="flex gap-2">
            <span className="badge">Кондиционеры</span>
            <span className="badge">Видеонаблюдение</span>
          </div>
          <h3 className="font-roboto font-semibold text-3xl">
            Установка, продажа, обслуживание кондиционеров и систем видео
            наблюдения
          </h3>
          <span className="text-grey text-lg font-semibold font-inter">
            Понятным языком объясняем технические термины
          </span>
        </div>
        <div className="bg-accent text-white grow rounded-20 flex flex-col justify-between gap-5 p-5 2xl:p-8">
          <h1 className="text-5xl font-semibold font-roboto">Техно Плюс</h1>
          <p className="text-lg font-normal font-inter">
            <b>Ваше доверие — наш главный приоритет</b>
            <br />
            <br />
            Наша компания работает уже много лет, и для нас важно, чтобы каждый
            клиент был готов рекомендовать нас своим знакомым, друзьям и
            близким.
          </p>
          <div className="bg-white rounded-20 text-black py-1 px-6 text-xl w-fit font-medium font-inter">
            Оставьте заявку но номеру{" "}
            <b className="text-nowrap">+7 (950) 700-04-04</b>
          </div>
        </div>
      </div>
      <div className="picture grow w-full h-96 lg:h-auto md:mx-auto lg:w-full xl:w-3/4 2xl:w-2/5 2k:w-1/5">
        <img
          src={camera}
          alt="Камера"
          className="object-cover object-center rounded-20 w-full h-full"
        />
      </div>
    </section>
  );
};
