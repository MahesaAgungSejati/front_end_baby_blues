import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/footer_logo.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'
import instagram_icon from '../Assets/instagram_icon.png'

export const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-logo'>
            <img src={footer_logo} alt='' />
            <p>SIPBIBU</p>
        </div>
        <ul className='footer-links'>
            <li>Lainnya</li>
            <li>Tentang SIPBIBU</li>
            <li>FAQ</li>
            <li>Syarat dan Ketentuan</li>
            <li>Kontak</li>
        </ul>
        <div className="footer-social-media">
            <div className='footer-icon-container'>
                <img src={whatsapp_icon} alt='' />
            </div>
            <div className='footer-icon-container'>
                <img src={instagram_icon} alt='' />
            </div>
        </div>
        <div className="footer-copyright">
            <hr />
            <p>Copyright @ 2024 - All Right Reserved</p>
        </div>
    </div>
  )
}

export default Footer
