import '../index.css';
import { NavLink } from 'react-router-dom';
import menu from "../img/menu_white_36dp.svg"

export function ToggleButton(){
    function menuShow() {
        let menuMobile = document.querySelector('.nav_list_mobile');
        if (menuMobile.classList.contains('open')){
            menuMobile.classList.remove('open');
        } else {
            menuMobile.classList.add('open');
        }
    }
    
    return (
        <>
            <div className="moblie_menu_icon">
                <button onClick={menuShow}><img src={menu} alt="burguer" /></button>
            </div>

            <div className='nav_list_mobile'>
                <ul className='link_list_mobile'>
                    <li>
                        <NavLink to="/" className={({isActive}) => (isActive ? 'active' : "")}>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/projects" className={({isActive}) => (isActive ? 'active' : "")}>
                            Projetos
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" className={({isActive}) => (isActive ? 'active' : "")}>
                            Sobre
                        </NavLink>
                    </li>
                </ul>
            </div>
        </>
    )
}