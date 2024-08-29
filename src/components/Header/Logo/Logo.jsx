import { useContext } from "react";
import { HeaderContext } from "../Header";

const Logo = () => {
  const { handleIsNavOpenFalse, x } = useContext(HeaderContext);
  return (
    <a href="#" className="text-[4rem]" onClick={handleIsNavOpenFalse}>
      <span>E</span>-<span className="font-bold">Edu</span>
    </a>
  );
};

export default Logo;
