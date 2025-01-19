export const Navigation: React.FC<{ address: boolean }> = ({ address }) => {
  return (
    <nav className="flex flex-col md:flex-row items-center gap-4">
      <a href="/#services">
        <button className="nav-button">Услуги</button>
      </a>
      <a href="/#contacts">
        <button className="nav-button">Контакты</button>
      </a>
      {address && (
        <a target="_blank" href="https://yandex.ru/maps/-/CHauUXMW">
          <button className="nav-button">Город Рославль</button>
        </a>
      )}
    </nav>
  );
};
