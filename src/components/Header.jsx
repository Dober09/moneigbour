import { useState } from 'react';
import menu from '../assets/icon-hamburger.svg'
import close from '../assets/icon-close.svg'
import '../css/header.css'
import Navigation from './Navigation';
const Header = () => {
    const [isMenu,SetIsMenu] = useState(false)
    const handleClick = ()=>{
        SetIsMenu(()=>!isMenu)
    }
    return (
        <header>
            <h1>moneigbour</h1>
            <div onClick={handleClick}>
            <img src={isMenu ? close:menu } alt="menu" />
            </div>
            <Navigation display={isMenu? 'flex':'none'}/>
        </header>
    );
}

export default Header;
