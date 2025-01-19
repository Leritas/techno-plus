import { Navigation } from "./Navigation";
import logo from "../../public/assets/logo.png";
import { useState } from "react";

export const Header = () => {
  const [isMobileMenuActive, setIsMobileMenuActive] = useState(false);

  return (
    <header
      className={`h-12 bg-white flex justify-between items-center relative rounded-20 transition-all ${
        isMobileMenuActive ? "rounded-b-none" : ""
      }`}
    >
      <div className="logo">
        <img src={logo} alt="Техно Плюс" className="h-full" />
      </div>
      <div className="pc-menu mr-4 hidden md:block">
        <Navigation address={true}></Navigation>
      </div>
      <div className="mobile-menu mr-4 md:hidden">
        <button
          className={`nav-button size-8 flex items-center justify-center`}
          onClick={() => setIsMobileMenuActive(!isMobileMenuActive)}
        >
          <div>{isMobileMenuActive ? "x" : "≡"}</div>
        </button>
        <div
          className={`dropdown bg-white absolute top-12 left-0 w-full rounded-b-20 overflow-hidden transition-all h-0 ${
            isMobileMenuActive && "h-36"
          }`}
        >
          <Navigation address={true}></Navigation>
        </div>
      </div>
    </header>
  );
};
