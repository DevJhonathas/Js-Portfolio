import styles from "./Footer.module.css";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.color_line_list}>
        <ul className={styles.navbar_footer}>
            <li><NavLink to='/' className={({isActive}) => (isActive ? styles.active : "")}>Home</NavLink></li>
            <li><NavLink to='/projects' className={({isActive}) => (isActive ? styles.active : "")}>Projetos</NavLink></li>
            <li><NavLink to='/about' className={({isActive}) => (isActive ? styles.active : "")}>Sobre</NavLink></li>
            <li><NavLink to='/contact' className={({isActive}) => (isActive ? styles.active : "")}>Contate-me</NavLink></li>
        </ul>
      </div>
        <div className={styles.brand_footer}>
                <p>©️ 2023-2023 <NavLink to='/'>JS <span>Portfolio</span></NavLink> Todos os direitos reservados</p>
        </div>
    </footer>
  )
}

export default Footer