import { FaBars } from "react-icons/fa";
import { useContext } from "react";
import { HeaderContext } from "../Header";

const Hamburger = () => {
  const { handleToggleIsNavOpen, x } = useContext(HeaderContext);
  return <FaBars className="md:hidden" onClick={handleToggleIsNavOpen} />;
};

export default Hamburger;
