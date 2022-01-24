import React from 'react'
import './Footer.css'
import { AiFillGithub } from 'react-icons/ai';

function Footer() {
    return (
        <footer className= "Footer">
          

            <div className="innerFooter">
               <hr></hr>
                <div className="thank" >
                <div className="text" >Thank you for visit </div>
                <div className="text" ><p>SFi mes kalladi college unit committee<br />
                <a href="https://jaseem1999.github.io/ajk/"><AiFillGithub className="hover:text-red-500" /></a></p></div>
                </div>
               
                
                

            </div>

        </footer>
    )
}

export default Footer
