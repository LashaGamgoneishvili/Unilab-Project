import Navigation from "./landing/header/Navigation";

import insta from "../Assets/social-medis-images/insta.png";
import facebook from "../Assets/social-medis-images/facebook.png";
import linkedin from "../Assets/social-medis-images/linkedin.png";
import mailerrow from "../Assets/mail-input/Paper_Plane.png";
import style from "./Footer.module.css";

function Footer() {
  return (
    <footer className={style.footer}>
      <div className={style.footer_content}>
        <div className={style.footer_head_part}>
          <h1>ExploreEra</h1>
          <p>Travel agency which helps you to plan your perfect holidays</p>
          <h2>Follow us</h2>
          <div className={style.footer_images}>
            <a href="/">
              <img src={insta} alt="instagra-logo" />
            </a>
            <a href="/">
              <img src={facebook} alt="facebook-logo" />
            </a>
            <a href="/">
              <img src={linkedin} alt="linkedin-logo" />
            </a>
          </div>
        </div>
        <div className={style.footer_links}>
          <h1>Links</h1>
          <Navigation />
        </div>
        <div className={style.footer_contact}>
          <h1>Contact us</h1>
          <p>exploreera@gmail.com</p>
          <p>555111222</p>
          <form className={style.footer_mail}>
            <label htmlFor="Email">Subscribe news</label>
            <input type="Email" placeholder="Email" id="Email" name="Email" />
            <a href="/">
              <img src={mailerrow} alt="mail" />
            </a>
          </form>
        </div>
      </div>
      <div className={style.copyright}>Copyright 2024</div>
    </footer>
  );
}

export default Footer;
