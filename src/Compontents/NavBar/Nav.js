import React from 'react'
import './Nav.css'
function Nav() {
    return (
        <div className="Nav">
            <img className="logo-kc" src="./img/mes-sfi.png" alt="sfikc" />
            <div className="nav-links"  id="center"> 
                <img className='logo-st' src="./img/sfikeralalogo.png" alt="sfikerala" />
            </div>
             
             <img className="logo-cc" src="./img/50sfi.png" alt="sficc" />
             <div className="fade-top"></div>
        </div>
    )
}

export default Nav
