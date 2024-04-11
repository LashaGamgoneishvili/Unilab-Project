import { useEffect, useReducer } from "react";
import { NavLink } from "react-router-dom";
// import { useLocalStorageState } from "./useLocalStorageState";

import Header from "../../Components/landing/header/Header";
import Footer from "../../Components/Footer";
import Input from "../../Components/Input";
import style from "./SignUp.module.css";
import facebook from "../../Assets/social-medis-images/facebook-svg.svg";
import apple from "../../Assets/social-medis-images/apple-svg.svg";
import google from "../../Assets/social-medis-images/google-svg.svg";
import mail_img from "../../Assets/social-medis-images/mail-svg.svg";
import photo from "../../Assets/social-medis-images/photo-icon.svg";

// const RegExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/g;
const lower = new RegExp("(?=.*[a-z])");
const upper = new RegExp("(?=.*[A-Z])");
const number = new RegExp("(?=.*[0-9])");
// const special = new RegExp("(?=.*[!@#$%^&*])");
// const length = new RegExp(".{8,}");

const initialValue = {
  firstName: "",
  lastName: "",
  mail: "",
  password: "",
  cfPassword: "",
  popup: false,
  EqualPass: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "firstName":
      return { ...state, firstName: action.payload.trim() };
    case "lastName":
      return { ...state, lastName: action.payload.trim() };
    case "email":
      return { ...state, mail: action.payload.trim() };
    case "password":
      return { ...state, password: action.payload.trim() };
    case "cfPassword":
      return { ...state, cfPassword: action.payload.trim() };
    case "active-popup":
      return { ...state, popup: true };
    case "hide-popup":
      return { ...state, popup: false };
    case "EqualPass":
      return { ...state, EqualPass: true };
    default:
      throw new Error("unknown action");
  }
}

localStorage.clear();
function SignUp() {
  const [items, dispatch] = useReducer(reducer, initialValue);

  // function handlecheck() {}

  useEffect(() => {
    if (
      lower.test(items.password) &&
      upper.test(items.password) &&
      number.test(items.password) &&
      lower.test(items.cfPassword) &&
      upper.test(items.cfPassword) &&
      number.test(items.cfPassword) &&
      items.password === items.cfPassword &&
      items.EqualPass !== true
    ) {
      dispatch({ type: "EqualPass" });
    }

    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  return (
    <div>
      <div className={style.container}>
        <header className={style.header}>
          <Header logoColor={"#333"} IconColor={"#333"} />
        </header>
        <div className={style.content_container}>
          <div className={style.sign_in_container}>
            <form className={style.form}>
              <Input
                text={"First name"}
                type={"text"}
                name={"firstName"}
                id={"fname"}
                placeholder={"Enter your first name"}
                dispatch={dispatch}
                value={items.firstName}
              />
              <Input
                text={"Last name"}
                type={"text"}
                name={"lastName"}
                id={"lname"}
                placeholder={"Enter your last name"}
                dispatch={dispatch}
                value={items.lastName}
              />
              <Input
                text={"Email"}
                type={"Email"}
                name={"email"}
                id={"email"}
                placeholder={"Enter your email address"}
                dispatch={dispatch}
                value={items.mail}
              />
              <Input
                text={"Password"}
                type={"Password"}
                name={"password"}
                id={"Password"}
                placeholder={"Enter your password"}
                dispatch={dispatch}
                value={items.password}
              />
              <p
                className={items.EqualPass !== "" ? style.message : style.none}
              >
                {items.message}
              </p>
              <Input
                text={"Confirm password"}
                type={"Password"}
                name={"cfPassword"}
                id={"cpassword"}
                placeholder={"Re-enter your password"}
                dispatch={dispatch}
                value={items.cfPassword}
              />
              <p
                className={items.EqualPass !== "" ? style.message : style.none}
              >
                {items.message}
              </p>
              <div className={style.img_div}>
                <img src={photo} alt="icon" />
              </div>

              <NavLink
                to={items.EqualPass && "/SignIn"}
                // onClick={handlecheck}
                className={`btn ${style.btn}`}
              >
                Continue
              </NavLink>
            </form>
            <div className={style.line}>
              <div></div>
              <span>or</span>
              <span>continue</span> <span>with</span>
              <div></div>
            </div>
            <div className={style.socialNet_container}>
              <div>
                <img src={facebook} alt="facebook" />
              </div>
              <div>
                <img src={apple} alt="apple" />
              </div>
              <div>
                <img src={google} alt="google" />
              </div>
              <div>
                <img src={mail_img} alt="mail" />
              </div>
            </div>
            <div className={style.sign_in_footer}>
              <p>
                By signing in or creating an account, you agree with our
                <span onClick={() => dispatch({ type: "active-popup" })}>
                  Terms & conditions
                </span>
                and
                <span onClick={() => dispatch({ type: "active-popup" })}>
                  Privacy policy
                </span>
              </p>
            </div>
          </div>
        </div>
        <div
          className={
            items.popup ? `${style.popup} ${style.active}` : style.hidden
          }
        >
          <div>
            <h1>Terms and conditions</h1>
            <p>
              Before you use our website or services, please carefully read the
              following Terms and Conditions. By accessing or using our
              platform, you agree to comply with and be bound by these terms. If
              you do not agree with any part of these terms, please do not use
              our services. Your privacy is important to us. Please review our
              Privacy Policy to understand how we collect, use, and disclose
              information about you. By using our services, you consent to our
              privacy practices.
            </p>
          </div>
          <div>
            <h1>Privacy policy</h1>
            <p>
              We may collect personal information, such as your name, email
              address, and other details, when you register an account, make a
              purchase, or interact with our services. We also automatically
              collect certain information, such as IP addresses, browser type,
              and usage patterns, through cookies and similar technologies. Our
              website may contain links to third-party websites or services.
            </p>
          </div>
          <button
            className="btn"
            onClick={() => dispatch({ type: "hide-popup" })}
          >
            I agree
          </button>
        </div>
        <div
          className={items.popup ? style.overlay : ""}
          onClick={() => dispatch({ type: "hide-popup" })}
        ></div>
      </div>
      <Footer />
    </div>
  );
}

export default SignUp;
