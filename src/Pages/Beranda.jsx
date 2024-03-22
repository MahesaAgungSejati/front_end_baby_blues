import React from 'react'
import Hero from '../Components/Hero/Hero'
import Popular from '../Components/Popular/Popular'
import Quiz  from '../Components/Quiz/Quiz'
import Artikel from '../Components/Artikel/Artikel'
import Psikolog from '../Components/Psikolog/Psikolog'

export const Beranda = () => {
  return (
    <div>
      <Hero/>
      <Popular/>
      <Quiz/>
      <Psikolog />
      <Artikel />
    </div>
  )
}

export default Beranda
