import React from 'react';
import './Popular.css';
import mediasi_image_4 from '../Assets/mediasi_image_4.png';
import mediasi_image_3 from '../Assets/mediasi_image_3.png'

export const Popular = () => {
  return (
    <div className='popular'>
      <hr/>
      <h1>Mediasi Mandiri Dirumah Sesukamu</h1>
      <div className='popular-item'>
        <div className="media-container-left">
          <img src={mediasi_image_4} alt=""/>
          <div className="media-info">
            <h2>Video Meditasi</h2>
            <p>Tonton video meditasi untuk membuatmu lebih baik dan
              rileks</p>
            <button>Lihat Semua</button>
          </div>
        </div>
        <div className="media-container-right">
          <img src={mediasi_image_3} alt=""/>
          <div className="media-info">
            <h2>Audio Meditasi</h2>
            <p>Dengarkan audio yang sangat nyaman untuk membuatmu lebih baik</p>
            <button>Lihat Semua</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popular;
