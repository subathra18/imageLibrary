import React from "react";
import { FaMoon, FaSun } from "react-icons/fa6";

const THEMES = {
  dark: "dark",
  light: "light",
};

const Header = () => {
  const [theme, setTheme] = React.useState(THEMES.dark);
  const heading = "Image Library";
  const handleTheme = () => {
    setTheme((theme) => {
      return theme == THEMES.dark ? THEMES.light : THEMES.dark;
    });
  };
  React.useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);
  return (
    <div className=" bg-base-200">
      <div className="navbar py-5  align-element">
        <div className="navbar-start"></div>
        <div className="navbar-center">
          <a className="btn btn-ghost text-3xl font-serif">
            {heading.toUpperCase()}
          </a>
        </div>
        <div className="navbar-end ">
          <label className="swap swap-rotate ">
            <input type="checkbox" onClick={handleTheme} />
            <FaSun className="swap-on h-4 w-4 " />
            <FaMoon className="swap-off h-4 w-4 " />
          </label>
        </div>
      </div>
    </div>
  );
};

export default Header;
