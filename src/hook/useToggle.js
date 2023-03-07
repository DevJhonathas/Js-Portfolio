import '../index.css';
import menu from "../img/menu_white_36dp.svg"
import close from "../img/close_white_36dp.svg"

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