import React from 'react'
import './Social.css'
import { FaBloggerB ,FaInstagram, FaFacebook } from 'react-icons/fa';
import { ImWhatsapp  } from 'react-icons/im';

function Social() {
    return (
        <div>
            <a href="https://www.facebook.com/Sfi-Mes-Kalladi-College-647106115341558/"><FaFacebook className="logo-fb" /></a>
            <a href="https://wa.me/+919544969372"> <ImWhatsapp className="wh-fb" /></a>
            <a href="https://instagram.com/sfi_meskc?utm_medium=copy_link"> <FaInstagram className="logo-inst" /></a>
            <a href="https://sfimeskc.blogspot.com/"> <FaBloggerB className="logo-vlog" /></a>
            <a href ="https://chat.whatsapp.com/DN6qpyrLcMbHvkLXE6RO4k"> <img className="new" src="./img/new.png" alt="new"/></a>
            <div className="newtxt">
               <a  href="https://chat.whatsapp.com/GqKHRwBIbY57LhLJoqJVTb"> <span>Rise up 4</span></a>
            </div>
        </div>
    )
}

export default Social
