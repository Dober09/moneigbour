import { useState } from "react";
import open from '../assets/menu.png'
import close from "../assets/close.png"
import icon from "../assets/community.png"
import { Outlet ,Link } from "react-router-dom";
const Header = () => {
    const [menu,setMenu] = useState(false)
    return (
        <header 
        className="fixed z-20 top-0 left-0 w-full bg-amber-500 bg-opacity-90 h-16 shadow-sm shadow-stone-900 flex justify-around px-3 items-center">
            <div id="logo">
                <p><Link to="/"><img src={icon} alt="icon" width={40} /></Link></p>
            </div>
            <div id="name-of-place">

                <p className="font-medium capitalize text-xl text-slate-50">
                    <Link to="/about">sand-sloot</Link>
                </p>
            </div>
            <div id="menu-btn">
                <div className="cursor-pointer" onClick={()=>setMenu(!menu)}>
                    <img src={ menu ?  close: open} alt="menu" width={24} height={24}/> 
                </div>
                <nav 
                className={` fixed  bg-amber-500 z-10 top-16 left-0 w-screen h-full transition-all `} 
                style={{display: menu ? "block":"none"}}>
                    <ul
                     className="space-y-6 text-center text-stone-50 capitalize"
                     onClick={()=>setMenu(!menu)}
                     >
                        <li className="mx-20 my-6">
                            <Link to="/business">Business</Link>
                        </li>
                        <li>
                            <Link to="/transport">Transport</Link>
                            <span className="text-xs font-extralight ml-2">comming soon</span>
                        </li>
                        <li>
                            <Link to="/sport">Sports</Link>
                        </li>
                        <li>
                            <Link to="/taskies">Jobs/Taskies</Link>
                            <span className="text-xs font-extralight ml-2">comming soon</span>
                        </li>
                        <li>
                            <Link to="/organization">Organizations</Link>
                        </li>
                    </ul>
                </nav>
               
            </div>
        </header>
    );
}

export default Header;
