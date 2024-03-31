import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './HasilQuiz.css';

function HasilQuiz({ id }) {
  const [hasil, setHasil] = useState(null);

  useEffect(() => {
    async function fetchHasil() {
      try {
        const response = await axios.get('http://localhost:8080/simpanHasil');
        setHasil(response.data);
      } catch (error) {
        console.error('Gagal mengambil data hasil kuisioner:', error.message);
      }
    }

    fetchHasil();
  }, [id]);

  return (
    <div className='hasil-tes'>
      <div className="hasil-tes-nama">
      <h1>Hasil Tes Edinburgh Postnatal Depression Scale (EPDS)</h1>
      </div>
      {hasil ? (
      <div className="kesimpulan-container">
        <div className='hasil-tes-kesimpulan'>
          {/* <p>ID: {hasil.id}</p> */}
          <h1>TOTAL SCORE TES : {hasil.total_skor}</h1>
          <h2>{hasil.hasil_kesimpulan}</h2>
          </div>
        </div>
      ) : (
        <p>Tidak ada data hasil kuisioner.</p>
      )}
    </div>
  );
}

export default HasilQuiz;
