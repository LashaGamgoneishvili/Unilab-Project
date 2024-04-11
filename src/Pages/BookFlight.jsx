import { useState } from "react";
import Footer from "../Components/Footer";
import style from "./BookFlight.module.css";
import logo from "../Assets/images/User-1.svg";
import BurgerManue from "../Components/landing/header/burgerManue/BurgerManue";

let screenSize = window.screen.width;

export default function App() {
  const [activeButton, setActiveButton] = useState("flight");

  function handleActive(buttonName) {
    setActiveButton(buttonName);
  }
  return (
    <>
      <Header textColor="#424244" screenSize={screenSize} />
      <div className={style.app_container}>
        <div className={style.app}>
          <Purpose>
            <>
              <Button
                active={activeButton === "flight"}
                onHandleActive={() => handleActive("flight")}
              >
                Flight
              </Button>
              <Button
                active={activeButton === "stay"}
                onHandleActive={() => handleActive("stay")}
              >
                Stays
              </Button>
              <Button
                active={activeButton === "car"}
                onHandleActive={() => handleActive("car")}
              >
                Car Rentals
              </Button>
            </>
          </Purpose>
          <SelectOptions>
            <SelectOption option={["One-Way", "Two-Ways"]} />
            <SelectOption option={["1 Adult", "2 Adults", "3 Adults"]} />
            <SelectOption option={["Economy", "Business"]} />
          </SelectOptions>
          <Forms />
          <Button className="selectBtn">Search</Button>
        </div>
      </div>
      <Footer />
    </>
  );
}

function Header({ textColor, logoColor, IconColor, screenSize }) {
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

function Purpose({ children }) {
  return <div className={style.purpose}>{children}</div>;
}

function Button({ children, active, className = "btn", onHandleActive }) {
  console.log(active);
  console.log(`style.${active ? `${className} active` : className}`);
  return (
    <button
      onClick={onHandleActive}
      className={`${style[className]} ${active ? style.active : ""}`}
    >
      {children}
    </button>
  );
}

function SelectOptions({ children }) {
  return <div className={style.selectOptions}>{children}</div>;
}
function SelectOption({ option }) {
  return (
    <div>
      <select className={style.select}>
        {option.map((n) => (
          <option key={n}>{n}</option>
        ))}
      </select>
    </div>
  );
}

function Forms() {
  return (
    <div className={style.forms}>
      <Form placeholder={"from:"} type={"text"} />
      <Form placeholder={"to:"} type={"text"} />
      <Form placeholder={"calendar"} type={"date"} />
    </div>
  );
}

function Form({ placeholder, type }) {
  return <input type={type} placeholder={placeholder} className={style.form} />;
}
