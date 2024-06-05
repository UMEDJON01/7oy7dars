import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { themeChange } from "theme-change";

function Header() {
  useEffect(() => {
    themeChange(false);
  }, []);

  return (
    <div className="bg-[#021431]">
      <div className="container w-3/4 mx-auto flex gap-5 justify-end py-2">
        <NavLink to="/login" className="text-gray-300 text-sm hover:underline">
          Sign in / Guest
        </NavLink>
        <NavLink
          to="/register"
          className="text-gray-300 text-sm hover:underline"
        >
          Create account
        </NavLink>
      </div>
    </div>
  );
}

export default Header;
