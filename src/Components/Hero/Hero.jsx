import React from 'react'
import './Hero.css'
// import hand_icon from '../Assets/hand_icon.png'
import arrow_icon from '../Assets/arrow.png'
import hero_image from '../Assets/hero_image_2.png'

export const Hero = () => {
  return (
    <div className='hero'>
        <div className='hero-left'>
            <h2>SELAMAT DATANG DI</h2>
            <div>
                <div className='hero-hand-icon'>
                    <h1>Sistem</h1>
                    {/* <img src={hand_icon} alt="" /> */}
                </div>
                <h1>Pencegahan dan Penanganan</h1>
                <p>Baby Blues pada Ibu</p>
                <h3>Lorem ipsum dolor sit amet consectetur.
                    Convallis est urna adipiscing fringilla nulla diam lorem non mauris.
                    Ultrices aliquet at quam</h3>
            </div>
            <div className='hero-latest-btn'>
                <div>Check Mood Harian</div>
                <img src={arrow_icon} alt=""/>
            </div>
        </div>
        <div className='hero-right'>
            <img src={hero_image} alt=""/>
        </div>
    </div>
  )
}


export default Hero