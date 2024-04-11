import { useState } from "react";

import BurgerManue from "./burgerManue/BurgerManue";
import Navigation from "./Navigation";
import logo from "../../../Assets/images/User_01.svg";
import style from "./Header.module.css";

function Header({ screenSize, logoColor, IconColor, textColor }) {
  const [open, setOpen] = useState(false);
  return (
    <header className={style.header}>
      {screenSize >= 1200 ? (
        <>
          <a
            href="/"
            className={`logo ${style.explorera}`}
            style={{ color: textColor }}
          >
            Explorera
          </a>
          <nav className={style.nav}>
            <Navigation textColor={textColor} />
            <div className={style.logo}>
              <img src={logo} className={style.nav_logo} alt="person-logo" />
            </div>
          </nav>
        </>
      ) : (
        <BurgerManue
          open={open}
          setOpen={setOpen}
          logoColor={logoColor}
          IconColor={IconColor}
        />
      )}
    </header>
  );
}

export default Header;
