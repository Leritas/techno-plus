export const FourCircles: React.FC<{ position: number }> = ({ position }) => {
  return (
    <div className="flex flex-row md:flex-col w-fit gap-0.5">
      <div className="first-two flex gap-0.5 md:flex-col xl:flex-row md:self-end">
        <div
          className={`circle size-7 bg-accent ${position === 1 && "bg-white"}`}
        ></div>
        <div
          className={`circle size-7 bg-accent ${position === 2 && "bg-white"}`}
        ></div>
      </div>
      <div className="second-two flex gap-0.5">
        <div
          className={`circle size-7 bg-accent ${position === 3 && "bg-white"}`}
        ></div>
        <div
          className={`circle size-7 bg-accent ${position === 4 && "bg-white"}`}
        ></div>
      </div>
    </div>
  );
};
