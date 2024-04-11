import { NavLink, useFetcher } from "react-router-dom";
import { useEffect, useReducer } from "react";

import style from "./SignIn.module.css";
import Header from "../../Components/landing/header/Header";
import Footer from "../../Components/Footer";

import facebook from "../../Assets/social-medis-images/facebook-svg.svg";
import apple from "../../Assets/social-medis-images/apple-svg.svg";
import google from "../../Assets/social-medis-images/google-svg.svg";
import mail_img from "../../Assets/social-medis-images/mail-svg.svg";
import { type } from "@testing-library/user-event/dist/type";

const initialValue = {
  mail: "",
  password: "",
  valid: false,
  emailMessage: "",
  passwordMessage: "",
  popup: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "email":
      return { ...state, mail: action.payload.trim() };
    case "password":
      return { ...state, password: action.payload.trim() };
    case "incorrect-pass":
      return { ...state, passwordMessage: "Wrong Password" };
    case "incorrect-email":
      return { ...state, emailMessage: "Wrong Email" };
    case "validate":
      return { ...state, valid: true };
    case "resetMail":
      return { ...state, emailMessage: "" };
    case "resetPassword":
      return { ...state, passwordMessage: "" };
    case "active-popup":
      return { ...state, popup: true };
    case "hide-popup":
      return { ...state, popup: false };
    default:
      throw new Error("unknown action");
  }
}

function SignIn() {
  const [
    { mail, password, valid, emailMessage, passwordMessage, popup },
    dispatch,
  ] = useReducer(reducer, initialValue);
  const storedItems = JSON.parse(localStorage.getItem("items"));

  function handlecheck(e) {
    e.preventDefault();
    if (mail && mail !== storedItems.mail && emailMessage !== "Wrong Email") {
      dispatch({ type: "incorrect-email" });
    }
    if (
      password &&
      password !== storedItems.password &&
      passwordMessage !== "Wrong Password"
    ) {
      dispatch({ type: "incorrect-pass" });
    }
  }

  function handleResetMail() {
    if (emailMessage && emailMessage !== "") {
      dispatch({ type: "resetMail" });
    }
  }
  function handleResetPassword() {
    if (passwordMessage && passwordMessage !== "") {
      dispatch({ type: "resetPassword" });
    }
  }

  useEffect(
    function () {
      function handleValitation() {
        if (
          mail &&
          storedItems &&
          password &&
          mail === storedItems.mail &&
          password === storedItems.password &&
          mail.length > 0 &&
          password.length > 0 &&
          valid === false
        ) {
          dispatch({ type: "validate" });
        }
      }
      handleValitation();
    },
    [mail, password, valid, storedItems]
  );

  useEffect(() => {
    dispatch({ type: "active-popup" });
  }, []);

  return (
    <>
      <div className={style.container}>
        <header className={style.header}>
          <Header logoColor={"#333"} IconColor={"#333"} />
        </header>
        <div className={style.content_container}>
          <div className={style.sign_in_container}>
            <form className={style.form} onSubmit={(e) => handlecheck(e)}>
              <div className={style.input}>
                <label htmlFor={"email"}>Email</label>
                <input
                  value={mail}
                  text="Email"
                  type="Email"
                  name="email"
                  id="email"
                  placeholder="Enter your email address"
                  onChange={(e) =>
                    dispatch({ type: "email", payload: e.target.value })
                  }
                  onClick={handleResetMail}
                />
                <p className={emailMessage !== "" ? style.message : style.none}>
                  {emailMessage}
                </p>
              </div>
              <div className={style.input}>
                <label htmlFor="Password">Email</label>
                <input
                  value={password}
                  text="Password"
                  type="Password"
                  name="password"
                  id="Password"
                  placeholder="Enter your password"
                  onChange={(e) =>
                    dispatch({ type: "password", payload: e.target.value })
                  }
                  onClick={handleResetPassword}
                />
                <p
                  className={
                    passwordMessage !== "" ? style.message : style.none
                  }
                >
                  {passwordMessage}
                </p>
              </div>
              <button
                className={`btn ${style.btn}`}
                onClick={(e) => handlecheck(e)}
              >
                <NavLink to={valid ? "/PersonalPage" : "#"}>Continue</NavLink>
              </button>
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
          className={popup ? `${style.popup} ${style.active}` : style.hidden}
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

        <Footer />
      </div>
      <div
        className={popup ? style.overlay : ""}
        onClick={() => dispatch({ type: "hide-popup" })}
      ></div>
    </>
  );
}

export default SignIn;
