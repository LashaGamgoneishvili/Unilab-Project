import { NavLink } from "react-router-dom";

function Navigation({ textColor }) {
  return (
    <ul>
      <li>
        <NavLink to="/" style={{ color: textColor }}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/AboutUs" style={{ color: textColor }}>
          About us
        </NavLink>
      </li>

      <li>
        <NavLink to="/Blogs" style={{ color: textColor }}>
          Blogs
        </NavLink>
      </li>

      <li>
        <NavLink to="/OurServices" style={{ color: textColor }}>
          Our Services
        </NavLink>
      </li>
      <li>
        <NavLink to="/OurOffers" style={{ color: textColor }}>
          Our Offers
        </NavLink>
      </li>
    </ul>
  );
}

export default Navigation;
