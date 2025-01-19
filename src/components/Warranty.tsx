import cond2 from "../../public/assets/cond2.png";

export const Warranty = () => {
  return (
    <section className="mt-8 lg:mt-16 grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-10">
      <div className="warranty-left bg-white rounded-20 p-5 2xl:p-8 flex flex-col justify-between gap-10">
        <h2>ГАРАНТИЯ</h2>
        <div className="warranty-card">
          <h3>от 1 года</h3>
          <p>на оборудование</p>
        </div>
        <div className="warranty-card">
          <h3>от 1 года</h3>
          <p>на обслуживание системы</p>
        </div>
      </div>
      <div className="warranty-right p-5 2xl:p-8 bg-accent rounded-20">
        <img
          src={cond2}
          alt="Кондиционер"
          className="object-cover object-center rounded-20 w-full h-full"
        />
      </div>
    </section>
  );
};
