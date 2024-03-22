import React from 'react';
import './Artikel.css';
import artikel_1 from '../Assets/artikel_1.jpeg';
import artikel_2 from '../Assets/artikel_2.jpeg';
import artikel_3 from '../Assets/artikel_3.jpeg';

export const Artikel = () => {
  return (
    <div className='artikel'>
      <hr />
      <h1>Artikel Terbaru</h1>
      <div className='artikel-item'>
        <div className='artikel-card'>
          <img src={artikel_1} alt='' />
          <div className='artikel-text'>
            <h2>Kesehatan Mental</h2>
            <h1>Tips & Trik menjaga kesehatan mental pasca melahirkan</h1>
            <p>Usai melahirkan, ibu mengalami banyak perubahan baik fisik maupun mental. Pada beberapa ibu, hal ini rentan memicu.....</p>
            <button onClick={''}>Lihat Selengkapnya</button>
          </div>
        </div>
        <div className='artikel-card'>
          <img src={artikel_2} alt='' />
          <div className='artikel-text'>
            <h2>Kesehatan Mental</h2>
            <h1>Ini cara ampuh atasi berat badan berlebih pasca melahirkan</h1>
            <p>Usai melahirkan, ibu mengalami banyak perubahan baik fisik maupun mental. Pada beberapa ibu, hal ini rentan memicu.....</p>
            <button onClick={''}>Lihat Selengkapnya</button>
          </div>
        </div>
        <div className='artikel-card'>
          <img src={artikel_3} alt='' />
          <div className='artikel-text'>
            <h2>Kesehatan Mental</h2>
            <h1>Ini cara ampuh atasi berat badan berlebih pasca melahirkan</h1>
            <p>Usai melahirkan, ibu mengalami banyak perubahan baik fisik maupun mental. Pada beberapa ibu, hal ini rentan memicu.....</p>
            <button onClick={''}>Lihat Selengkapnya</button>
          </div>
        </div>
      </div>
          <div className='view-all'>
          <button onClick={''}>Lihat Semua</button>
          </div>
    </div>
  );
};

export default Artikel;
