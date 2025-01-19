import { FourCircles } from "./FourCircles";

export const Advantages = () => {
  return (
    <section className="mt-12 lg:mt-24 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-10 lg:grid-rows-2 md:grid-rows-2">
      <div className="bg-white md:row-span-2 rounded-20 p-5 flex flex-col">
        <span className="badge">Преимущества</span>
        <h2 className="mt-12 mb-10">ПОЧЕМУ НАС ВЫБИРАЮТ?</h2>
        <p className="text-base font-inter">
          Наша компания проектирует, поставляет оборудование и реализует проекты
          любой сложности на протяжении <b>10 лет</b>.
          <br />
          <br />
          Мы используем только <b>современное оборудование</b> и выполняем
          монтаж в рамках индивидуального запроса клиента.
        </p>
      </div>
      <div className="advantages-card">
        <FourCircles position={1}></FourCircles>
        <p>
          Подбор и монтаж кондиционеров и видеонаблюдения{" "}
          <b>в короткие сроки</b>
        </p>
      </div>
      <div className="advantages-card">
        <FourCircles position={2}></FourCircles>
        <p>
          Оборудование от <b>надёжных брендов</b> систем безопасности{" "}
          <b>с гарантией от 1 года</b>
        </p>
      </div>
      <div className="advantages-card">
        <FourCircles position={3}></FourCircles>
        <p>
          Обязательный выезд специалиста на объект до начала работ, для{" "}
          <b>точного расчёта стоимости</b>
        </p>
      </div>
      <div className="advantages-card">
        <FourCircles position={4}></FourCircles>
        <p>
          Чистый монтаж на объектах с готовым ремонтом! В работе{" "}
          <b>используем промышленные пылесосы</b>
        </p>
      </div>
    </section>
  );
};
