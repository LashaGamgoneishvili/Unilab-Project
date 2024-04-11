import Header from "./header/Header";
import style from "./Landing.module.css";

// const screenSize = window.screen.width;

const screenSize =
  window.innerWidth ||
  document.documentElement.clientWidth ||
  document.body.clientWidth;

function Landing() {
  return (
    <div className={style.landing}>
      <Header screenSize={screenSize} />
      <div className={style.landing_content}>
        <div className={style.landing_text}>
          <p>Visit Mountains In</p>
          <h1>ITALY</h1>
        </div>
        <button>See offer</button>
      </div>
    </div>
  );
}

export default Landing;
