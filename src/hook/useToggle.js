import '../index.css';
import menu from "../img/menu_black_icon.svg"
import close from "../img/close_black.svg"

import { NavLink } from 'react-router-dom';

// hook
import { useState } from 'react'; 

export function ToggleButton(){
    const [contains, setContains] = useState(false);
    const ToggleMode = () => {
        setContains(!contains);
    }
 
    return (
        <>
            <div className="moblie_menu_icon">
                <button onClick={ToggleMode}><img src={contains ? close : menu} alt="burguer" /></button>
            </div>
            <div className={contains ? 'nav_list_mobile open' : 'nav_list_mobile'}>
                <ul className='link_list_mobile'>
                    <li>
                        <NavLink to="/">
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/projects">
                            Projetos
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">
                            Sobre
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact">
                            Contate-me
                        </NavLink>
                    </li>
                </ul>
            </div>
        </>
    )
}