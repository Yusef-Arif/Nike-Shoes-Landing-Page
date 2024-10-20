import { useState } from "react";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constans";

function ToggleList() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleList = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <a onClick={toggleList} className="hidden max-lg:block">
        <img
          src={hamburger}
          alt="menu"
          width={25}
          height={25}
          className="relative cursor-pointer"
        />
      </a>

      {isOpen && (
        <div className="absolute z-10 hidden max-lg:block w-48 right-24 max-md:w-full max-md:right-0 my-2">
          <ul className="flex justify-center items-center flex-col ">
            {navLinks.map((item) => (
              <li
                key={item.label}
                className="p-2 bg-[#f5b2ab] w-full flex justify-center items-center border-b-slate-700"
              >
                <a href={item.href} className="text-xl font-montserrat">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default ToggleList;
