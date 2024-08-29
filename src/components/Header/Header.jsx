import { useState } from "react";
import Hamburger from "./Hamburger/Hamburger";
import Logo from "./Logo/Logo";
import Nav from "./Nav/Nav";
import { createContext } from "react";

export const HeaderContext = createContext();

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const handleToggleIsNavOpen = () => {
    setIsNavOpen((prev) => !prev);
  };
  const handleIsNavOpenFalse = () => {
    setIsNavOpen(false);
  };
  return (
    <header
      className="
        fixed
        top-0
        left-0
        right-0
        z-50
        text-[4rem]
        md:text-[2rem]
        lg:text-[3rem]
        flex
        items-center
        justify-between
        px-[2%]
        py-[2rem]
        h-[10rem]
        bg-pink-900"
    >
      <HeaderContext.Provider
        value={{
          handleToggleIsNavOpen: handleToggleIsNavOpen,
          handleIsNavOpenFalse: handleIsNavOpenFalse,
        }}
      >
        <Logo />
        {isNavOpen && <Nav type="mobile" />}
        <Nav type="desktop" />
        <Hamburger />
      </HeaderContext.Provider>
    </header>
  );
};

export default Header;
