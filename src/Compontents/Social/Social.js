import React from 'react'
import './Social.css'
import { FaBloggerB ,FaInstagram, FaFacebook } from 'react-icons/fa';
import { ImWhatsapp  } from 'react-icons/im';

function Social() {
    return (
        <div>
            <a href="https://www.facebook.com/Sfi-Mes-Kalladi-College-647106115341558/"><FaFacebook className="logo-fb" /></a>
            <a href="https://wa.me/+918156988931"> <ImWhatsapp className="wh-fb" /></a>
            <a href="https://instagram.com/sfi_meskc?utm_medium=copy_link"> <FaInstagram className="logo-inst" /></a>
            <a href="https://sfimeskc.blogspot.com/"> <FaBloggerB className="logo-vlog" /></a>
            <a href ="https://chat.whatsapp.com/DN6qpyrLcMbHvkLXE6RO4k"> <img className="new" src="./img/new.png" alt="new"/></a>
            <div className="newtxt">
               <a  href="https://jaseem1999.github.io/Rise-up/"> <span>Rise up Web Page</span></a>
            </div>
            <div className= "cucet-rise-up" >
                <img className="newRiseup" src="./img/new.png" alt="newRiseup"/>
                <marquee className="sq1">
                <a href="https://chat.whatsapp.com/H4fHyxfZsSk3p2CV8pmSE4"><span className="pg"> RISE UP |കേന്ദ്ര _സംസ്ഥാന സർവകശാലകളിലേകു ള്ള പിജി എൻട്രൻസ് പരീക്ഷക്ക് തയ്യാറാടുക്കുന്ന വിദ്യാർത്ഥികൾക് ജോയിൻ ചെയ്യാം</span></a>
                </marquee>

            </div>
        </div>
    )
}
export default Social
