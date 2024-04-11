import { NavLink } from "react-router-dom";

import Navigation from "../Navigation";
import MenuIcon from "./MenuIcon";
import style from "./BurgerManue.module.css";

function BurgerManue({ open, setOpen, logoColor, IconColor }) {
  return (
    <>
      <a href="/" className="logo" style={{ color: logoColor }}>
        Explorera
      </a>
      <nav>
        {open ? (
          <div
            className={
              open
                ? `${style.sidebar} ${style.sidebar_active}`
                : style.sidebar_hide
            }
          >
            <div className={style.sidebar_box}>
              <ul>
                <li>
                  <NavLink to="/SignIn">Sign in</NavLink>
                </li>
                <li>
                  <NavLink to="/SignUp">Sign up</NavLink>
                </li>
              </ul>

              <Navigation />
            </div>
            <MenuIcon open={open} setOpen={setOpen} IconColor={IconColor} />
          </div>
        ) : (
          <MenuIcon open={open} setOpen={setOpen} IconColor={IconColor} />
        )}
      </nav>
    </>
  );
}

export default BurgerManue;
