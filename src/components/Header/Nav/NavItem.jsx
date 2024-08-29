import { useContext } from "react";
import { HeaderContext } from "../Header";
import { useLocation } from "react-router-dom";

const NavItem = ({ navLink }) => {
  const { handleIsNavOpenFalse, x } = useContext(HeaderContext);
  const pathname = useLocation();
  return (
    <a
      href={navLink.url}
      className={`
      capitalize 
      block 
      w-full 
      text-center 
      border-b-[1px] 
      md:border-none
      py-[2rem] 
      md:inline-block 
      md:w-auto 
      px-[2rem]
      hover:text-amber-300
      ${pathname.hash === navLink.url && "text-amber-500"}
      `}
      onClick={handleIsNavOpenFalse}
    >
      {navLink.link}
    </a>
  );
};

export default NavItem;
