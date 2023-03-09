import React from 'react'
import "./Footer.css";
import {ImFacebook, ImGithub, ImInstagram, ImLinkedin2} from 'react-icons/im';
import {AiOutlineCopyrightCircle} from 'react-icons/ai';


function Footer() {
  return (
    <div className="footer">
      <span className="name"> <AiOutlineCopyrightCircle/> Shelly Yaron</span>
      <ul className="wrapper">
        <li className="icon github">
          <span className="tooltip">Github</span>
          <a href={"https://github.com/ShellyYaron"} target={"_blank"}><i className="fab fa-github"></i><ImGithub/></a>
        </li>
        <li className="icon linkedin">
          <span className="tooltip">Linkedin</span>
          <a href={"https://www.linkedin.com/in/shelly-yaron-profile/"} target={"_blank"}><i className="fab fa-linkedin"></i><ImLinkedin2/></a>
        </li>
        <li className="icon facebook">
          <span className="tooltip">Facebook</span>
          <a href={"https://www.facebook.com/shellyyaron2911"} target={"_blank"}><i className="fab fa-facebook-f"></i><ImFacebook/></a>
        </li>
        <li className="icon instagram" >
          <span className="tooltip">Instagram</span>
          <a href={"https://www.instagram.com/shelly_yaron_2911/"} target={"_blank"}><i className="fab fa-instagram"></i><ImInstagram/> </a>
        </li>
      </ul>
    </div>
  )
}

export default Footer





