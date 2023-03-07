import styles from "./Footer.module.css";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <main className={styles.main}>
      <div className={styles.color_line_list}>
        <ul className={styles.navbar_footer}>
            <li><NavLink to='/' className={({isActive}) => (isActive ? styles.active : "")}>Home</NavLink></li>
            <li><NavLink to='/projects' className={({isActive}) => (isActive ? styles.active : "")}>Projetos</NavLink></li>
            <li><NavLink to='/about' className={({isActive}) => (isActive ? styles.active : "")}>About</NavLink></li>
        </ul>
      </div>
        <div className={styles.brand}>
                <p>©️ 2023-2023 <NavLink to='/'>JS <span>Portfolio</span></NavLink> Todos os direitos reservados</p>
        </div>
    </main>
  )
}

export default Footer