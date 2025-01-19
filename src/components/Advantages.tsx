export const Advantages = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10 xl:gap-20 lg:grid-rows-2">
      <div className="bg-white lg:row-span-2 rounded-20 p-5 flex flex-col justify-between">
        <span className="badge ">Преимущества</span>
        <h2>ПОЧЕМУ НАС ВЫБИРАЮТ?</h2>
        <p>
          Наша компания проектирует, поставляет оборудование и реализует проекты
          любой сложности на протяжении <b>10 лет</b>.
          <br />
          Мы используем только <b>современное оборудование</b> и выполняем
          монтаж в рамках индивидуального запроса клиента.
        </p>
      </div>
      <div className="advantages-card">
        Подбор и монтаж кондиционеров и видеонаблюдения <b>в короткие сроки</b>
      </div>
      <div className="advantages-card">
        Оборудование от <b>надёжных брендов</b> систем безопасности{" "}
        <b>с гарантией от 1 года</b>
      </div>
      <div className="advantages-card">
        Обязательный выезд специалиста на объект до начала работ, для{" "}
        <b>точного расчёта стоимости</b>
      </div>
      <div className="advantages-card">
        Чистый монтаж на объектах с готовым ремонтом! В работе{" "}
        <b>используем промышленные пылесосы</b>
      </div>
    </section>
  );
};
