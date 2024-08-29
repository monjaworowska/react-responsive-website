import { navLinks } from "../../../data/data";
import NavItem from "./NavItem";
const Nav = ({ type }) => {
  return (
    <nav
      className={`
      ${
        type === "mobile" &&
        "md:hidden absolute top-full left-0 right-0 flex flex-col border-t-[1px] bg-black"
      }
      ${type === "desktop" && "hidden md:block"}
      `}
    >
      {navLinks.map((navLink) => (
        <NavItem key={navLink.id} navLink={navLink} />
      ))}
    </nav>
  );
};

export default Nav;
