import { headerLogo } from "../assets/images";
import { navLinks } from "../constans";
import ToggleList from "./ToggleList";

const Nav = ({product}) => {
  return (
    <header
      className={`padding-x py-8 ${
        product ? "relative" : "absolute"
      } w-full z-10`}
    >
      <nav className="flex justify-between items-center">
        <a href="/">
          <img src={headerLogo} className="m-0 w-[129px] h-[29px]" alt="" />
        </a>
        <ul className="flex justify-between items-center gap-16 max-lg:hidden ">
          {navLinks.map((item) => (
            <li key={item.label} className="linav-style relative">
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>
        <ToggleList />
      </nav>
    </header>
  );
};

export default Nav;
