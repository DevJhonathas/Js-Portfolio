import styles from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

// hook
import { ToggleButton } from "../hook/useToggle";

const Navbar = () => {
  return (
    <nav className={styles.navbar} >
        <NavLink to="/"className={styles.brand}>
            JS <span>Portfolio</span>
        </NavLink>
        <div className={styles.nav_list}>
            <ul className={styles.link_list}>
                <li>
                    <NavLink to="/" className={({isActive}) => (isActive ? styles.active : "")}>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/projects" className={({isActive}) => (isActive ? styles.active : "")}>
                        Projetos
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/about" className={({isActive}) => (isActive ? styles.active : "")}>
                        Sobre
                    </NavLink>
                </li>
            </ul>
        </div>
        <ToggleButton/>
    </nav>
  )
}

export default Navbar