import React from 'react';
import './Rubrik.css';
import artikel_1 from '../Components/Assets/artikel_1.jpeg'
import artikel_2 from '../Components/Assets/artikel_2.jpeg'
import artikel_3 from '../Components/Assets/artikel_3.jpeg'
import artikel_4 from '../Components/Assets/artikel_4.jpg'
import artikel_5 from '../Components/Assets/artikel_5.jpg'
import artikel_6 from '../Components/Assets/artikel_6.jpg'
import artikel_7 from '../Components/Assets/artikel_7.jpg'

export const Rubrik = () => {
  return (
    <div className='rubrik'>
      <div className='search-bar'>
        <input type='text' placeholder='Cari artikel...' />
        <button type='button'>Cari</button>
      </div>
      <div className='categories'>
      <div className='categories-button'>
        <button onClick={''}>Kesehatan Mental</button>
      </div>
      <div className='categories-button'>
        <button onClick={''}>Makanan Sehat</button>
      </div>
      <div className='categories-button'>
        <button onClick={''}>Hidup Sehat</button>
      </div>
      <div className='categories-button'>
        <button onClick={''}>Kesehatan Bayi</button>
      </div>
      <div className='categories-button'>
        <button onClick={''}>Keluarga Sehat</button>
        </div>
      <div className='categories-button'>
        <button onClick={''}>Keluarga Sehat</button>
        </div>
        </div>


        <div className='artikel-top'>
          <div className='artikel-top-card'>
            <img src={artikel_5} alt=" " />
            <div className='artikel-content-top'>
            <h2>Kesehatan Mental</h2>
            <h1>Tips & Trik menjaga kesehatan mental pasca melahirkan</h1>
            <p>Usai melahirkan, ibu mengalami banyak perubahan baik fisik maupun mental. Pada beberapa ibu, hal ini rentan memicu.....</p>
            <button onClick={''}>Lihat Selengkapnya</button>
            </div>
          </div>
          </div>

          
          <div className='artikel-list'>
      <h1>ARTIKEL TERBARU</h1>
      <hr />
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
      <div className='artikel-item'>
        <div className='artikel-card'>
          <img src={artikel_4} alt='' />
          <div className='artikel-text'>
            <h2>Kesehatan Mental</h2>
            <h1>Tips & Trik menjaga kesehatan mental pasca melahirkan</h1>
            <p>Usai melahirkan, ibu mengalami banyak perubahan baik fisik maupun mental. Pada beberapa ibu, hal ini rentan memicu.....</p>
            <button onClick={''}>Lihat Selengkapnya</button>
          </div>
        </div>
        <div className='artikel-card'>
          <img src={artikel_6} alt='' />
          <div className='artikel-text'>
            <h2>Kesehatan Mental</h2>
            <h1>Ini cara ampuh atasi berat badan berlebih pasca melahirkan</h1>
            <p>Usai melahirkan, ibu mengalami banyak perubahan baik fisik maupun mental. Pada beberapa ibu, hal ini rentan memicu.....</p>
            <button onClick={''}>Lihat Selengkapnya</button>
          </div>
        </div>
        <div className='artikel-card'>
          <img src={artikel_7} alt='' />
          <div className='artikel-text'>
            <h2>Kesehatan Mental</h2>
            <h1>Ini cara ampuh atasi berat badan berlebih pasca melahirkan</h1>
            <p>Usai melahirkan, ibu mengalami banyak perubahan baik fisik maupun mental. Pada beberapa ibu, hal ini rentan memicu.....</p>
            <button onClick={''}>Lihat Selengkapnya</button>
          </div>
        </div>
      </div>
          </div>
        </div>
  );
};

export default Rubrik;
