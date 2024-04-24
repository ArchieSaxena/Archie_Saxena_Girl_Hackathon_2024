import classes from "./NavBar.module.css";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import img from "../../assets/logo.jpg";

export default function NavBar() {
  // Implement route protection
  return (
    <nav className={classes.header}>
      <img src={img} className={classes.logo} alt="Logo"></img>
      <div className={classes.innerContainer}>
        <button className={classes.allnav}>
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
          >
            <span>Home</span>
          </NavLink>
        </button>
        <button className={classes.allnav}>
          <NavLink
            to={`/predictDisease`}
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
          >
            <span>Disease Prediction</span>
          </NavLink>
        </button>
      </div>
    </nav>
  );
}
