import cond from "../../public/assets/cond.png";

export const Services = () => {
  return (
    <section id="services" className="bg-white rounded-20 mt-12 lg:mt-24 p-5">
      <div className="services-title mb-12 lg:mb-20">
        <h2 className="">УСЛУГИ</h2>
        <h3 className="h2">Техно Плюс</h3>
      </div>
      <div className="services-wrapper flex flex-col md:flex-row gap-7">
        <div className="services-cards flex flex-col lg:flex-row gap-8">
          <div className="triplet flex flex-col gap-8">
            <div className="services-card">
              <h3>Окна</h3>
              <p>Надёжность и высокий уровень комфорта</p>
            </div>
            <div className="services-card">
              <h3>Домофоны</h3>
              <p>
                Позволяет на этапе звонка точно определить, кто к вам пришёл и
                позвать на помощь в случае необходимости
              </p>
            </div>
            <div className="services-card">
              <h3>Видеонаблюдение</h3>
              <p>
                Позволяет обеспечить безопасность прав человека, частной и
                государственной собственности
              </p>
            </div>
          </div>
          <div className="duplet flex flex-col gap-8">
            <div className="services-card">
              <h3>Кондиционеры</h3>
              <p>
                Продажа, установка, обслуживание и ремонт. Опыт более 10 лет,
                выполним качественный монтаж. Есть кондиционеры любой ценовой
                категории.
              </p>
            </div>
            <div className="services-card">
              <h3>Видеосистемы для спецтехники</h3>
              <p>
                Позволяют решить задачи, связанные с работами при ведении
                строительства, монтажа и производства.
              </p>
            </div>
          </div>
        </div>
        <div className="picture w-full xl:w-2/3">
          <img
            src={cond}
            alt="Кондиционер"
            className="object-cover object-center rounded-20 w-full h-full"
          />
        </div>
      </div>
    </section>
  );
};
