import React from 'react'
import logoImg from '../assets/images/whitelogo.png'
import '../styles/footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebook, faInstagram, faTwitter, faYoutube} from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <div className='footer' id='contact'>
        <footer className="pie-pagina">
        <div className="grupo-1">
            <div className="box">
                <figure>
                    <a href="#">
                        <img src={logoImg} alt="" />
                    </a>
                </figure>
            </div>
            <div className="box">
                <h2>SOBRE NOSOTROS</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, ipsa?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, ipsa?</p>
            </div>
            <div className="box">
                <h2>SIGUENOS</h2>
                <div className="red-social">
                   <a href="#">
                        <FontAwesomeIcon icon={faFacebook} />
                   </a>
                   <a href="#">
                        <FontAwesomeIcon icon={faInstagram} />
                   </a>
                   <a href="#">
                        <FontAwesomeIcon icon={faTwitter} />
                   </a>
                   <a href="#">
                        <FontAwesomeIcon icon={faYoutube} />
                   </a>
                </div>
            </div>
        </div>
        <div className="grupo-2">
            <small>&copy; 2023 <b>SHALOM</b> - Todos los Derechos Reservados.</small>
        </div>
    </footer>
    </div>
  )
}

export default Footer