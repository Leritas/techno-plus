export const AboutWork = () => {
  return (
    <section className="mt-8 lg:mt-16 bg-accent rounded-20 p-5 2xl:p-8 text-white">
      <h2 className=" mb-12 lg:mb-20">КАК МЫ РАБОТАЕМ</h2>
      <div className="tripple-circles grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="circle with-content">
          <p>
            <b>Бесплатный</b>
            <br />и обязательный выезд специалиста на объект.
          </p>
        </div>
        <div className="circle with-content">
          <p>
            <b>Рассчитываем и согласовываем</b>
            <br />
            перечень оборудования, требуемых работ и сроков выполнения заказа.
          </p>
        </div>
        <div className="circle with-content">
          <p>
            <b>Подписываем договор</b>
            <br />и приступаем к работе в течении 24 часов.
          </p>
        </div>
      </div>
    </section>
  );
};
