import React, { useState } from 'react'
import './Navbar.css'
import logo from '../Assets/SIPBIBU Logo 2.png'
import { Link } from 'react-router-dom';

export const Navbar = () => {

    const [menu,setMenu] = useState("beranda");

  return (
    <div className='navbar'>
        <div className="nav-logo">
            <img src={logo} alt="" />
            {/* <p>SIPBIBU</p> */}
        </div>
        <ul className="nav-menu">
            <li onClick={()=>{setMenu("beranda")}}><Link style={{ textDecoration: 'none'}} to='/'>Beranda</Link>{menu==="beranda"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("konsul")}}><Link style={{ textDecoration: 'none'}} to='/konsul'>Konsultasi Online</Link>{menu==="konsul"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("forums")}}><Link style={{ textDecoration: 'none'}} to='/forums'>Forum Dikusi Ibu</Link>{menu==="forums"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("rubriks")}}><Link style={{ textDecoration: 'none'}} to='/rubriks'>Rubriks Mom</Link>{menu==="rubriks"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("SOSS")}}><Link style={{ textDecoration: 'none'}} to='/SOSS'>SOS</Link>{menu==="SOSS"?<hr/>:<></>}</li>
        </ul>
        <div className="nav-login-cart">
            <Link to='/login'><button>Login</button></Link>
        </div>
    </div>
  )
}
