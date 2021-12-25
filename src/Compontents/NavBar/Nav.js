import React from 'react'
import './Nav.css'
function Nav() {
    return (
        <div className="Nav">
            <img className="logo-kc" src="./img/mes-sfi.png" alt="sfikc" />
               <div className="sfi">
                    <a href="http://www.sficec.org/"><h1>Student's federation of India</h1></a>
               </div>
             <img className="logo-cc" src="./img/50sfi.png" alt="sficc" />
             <div className="fade-top"></div>
        </div>
    )
}

export default Nav
