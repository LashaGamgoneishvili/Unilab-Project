import style from "./MenuIcon.module.css";

function MenuIcon({ open, setOpen, IconColor }) {
  return (
    <div
      className={`${style.menu_icon} ${open ? style.menu_opened : ""}`}
      onClick={() => setOpen((open) => !open)}
    >
      <div style={{ backgroundColor: IconColor }}></div>
      <div style={{ backgroundColor: IconColor }}></div>
      <div style={{ backgroundColor: IconColor }}></div>
    </div>
  );
}

export default MenuIcon;
