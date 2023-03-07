import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <main className={styles.main}>
        <ul className={styles.navbar_footer}>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/projects'>Projetos</NavLink></li>
            <li><NavLink to='/about'>About</NavLink></li>
        </ul>
        <div className={styles.brand}>
                <p>©️ 2023-2023 <NavLink to='/'>JS <span>Portfolio</span></NavLink> Todos os direitos reservados</p>
        </div>
    </main>
  )
}

export default Header