import Header from "../Components/landing/header/Header";
import style from "./AboutUs.module.css";

function AboutUs() {
  return (
    <div>
      <div className={style.container}>
        <Header logoColor={"#333"} divColor={"#333"} />
      </div>
      <h1>AboutUs</h1>
    </div>
  );
}

export default AboutUs;
